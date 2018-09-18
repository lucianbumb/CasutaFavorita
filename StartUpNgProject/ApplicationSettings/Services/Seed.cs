using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using StartUpNgProject.ApplicationSettings.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StartUpNgProject.ApplicationSettings.Services
{
    public class Seed
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public Seed(UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public void SeedUsers()
        {
            if (!_userManager.Users.Any())
            {
                var userData = System.IO.File.ReadAllText("ApplicationSettings/Services/Users.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);

                var roles = new List<IdentityRole>
                {
                    new IdentityRole{Name = "Member"},
                    new IdentityRole{Name = "Admin"},
                    new IdentityRole{Name = "Moderator"},
                    new IdentityRole{Name = "VIP"},
                };

                foreach (var role in roles)
                {
                    _roleManager.CreateAsync(role).Wait();
                }

                foreach (var user in users)
                {
                    _userManager.CreateAsync(user, "password").Wait();
                    _userManager.AddToRoleAsync(user, "Member").Wait();
                }

                var adminUser = new User
                {
                    UserName = "Admin",
                    FirstName="Admin",
                    LastName="Admin"
                };

                var result = _userManager.CreateAsync(adminUser, "password");

                if (result.Result.Succeeded)
                {
                    var admin = _userManager.FindByNameAsync("Admin").Result;
                    _userManager.AddToRolesAsync(admin, new[] { "Admin", "Moderator" }).Wait();
                }
            }
        }
    }
}
