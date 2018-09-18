using Microsoft.AspNetCore.Identity;

namespace StartUpNgProject.ApplicationSettings.Models
{
    public class User:IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhotoUrl { get; set; }
    }

    public class UserForRegisterDto
    {
        public string Password { get; set; }
    }

    public class UserForDetailedDto
    {

    }

    public class UserForLoginDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class UserForListDto
    {

    }
}
