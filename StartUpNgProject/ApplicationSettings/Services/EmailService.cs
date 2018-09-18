using Microsoft.Extensions.Configuration;
using StartUpNgProject.ApplicationSettings.Models;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace StartUpNgProject.ApplicationSettings.Services
{
    public class EmailService : IEmailService
    {
        private readonly IConfiguration _configuration;
        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public async Task SendEmail(EmailModel data)
        {
            using (var client = new SmtpClient())
            {
                var credential = new NetworkCredential
                {
                    UserName = _configuration["Email:Email"],
                    Password = _configuration["Email:Password"]
                };

                client.Credentials = credential;
                client.Host = _configuration["Email:Host"];
                client.Port = int.Parse(_configuration["Email:Port"]);
                client.EnableSsl = true;

                using (var emailMessage = new MailMessage())
                {
                    emailMessage.To.Add(new MailAddress(data.Email));
                    emailMessage.From = new MailAddress(_configuration["Email:Email"]);
                    emailMessage.Subject = data.Subject;
                    emailMessage.Body = data.Message;
                    emailMessage.IsBodyHtml = true;
                    client.Send(emailMessage);
                }
            }
            await Task.CompletedTask;
        }

        public async Task<bool> SendResetPasswordEmail(string email, string resetToken)
        {
            var emailWasSent = true;
            var model = new EmailModel
            {
                Email = email,
                Subject = "Reset Password",
                Message = $"<div style='width: 100%;padding:10px;background: #26d4f3'><h3>Reset password</h3><p>We got a request to reset your password, if the request is not yours please report this issue to your admin and delete this email.</p><a href='http://localhost:4200/reset-password/{resetToken}' style='text-decoration: none;padding: 10px;display: block;background: red;color: white;margin: 20px;'>Reset password</a></div>"
            };
            try
            {
                await SendEmail(model);
            }
            catch (System.Exception)
            {

                return false;
            }
            return emailWasSent;
        }
        
    }
}
