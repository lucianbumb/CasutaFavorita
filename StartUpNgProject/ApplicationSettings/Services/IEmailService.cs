using System.Threading.Tasks;
using StartUpNgProject.ApplicationSettings.Models;

namespace StartUpNgProject.ApplicationSettings.Services
{
    public interface IEmailService
    {
        Task SendEmail(EmailModel data);
        Task<bool> SendResetPasswordEmail(string email, string resetToken);
    }
}