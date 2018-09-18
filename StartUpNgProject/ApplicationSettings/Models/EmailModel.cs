using System;

namespace StartUpNgProject.ApplicationSettings.Models
{
    public class EmailModel
    {
        public string Email { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
        public byte[] OneTimeCode { get; set; }

        public static EmailModel ResetPasswordSucced(string email)
        {
            return new EmailModel
            {
                Email = email,
                Subject = "Reset Password Succed",
                Message = $"Your password has been changed {DateTime.Now.ToLocalTime()}"
            };
        }
    }
}
