using Collibri.Repositories.ExtensionMethods;
using Microsoft.AspNetCore.Identity;

namespace Collibri.Models
{
    public class Account : IdentityUser<Guid>
    {
        public virtual ICollection<RoomMember> RoomMembers { get; set; }
        
        public Account()
        {
            
        }
        public int Id { get; set; }
        public string Username { get; set; } = "";
        public string Password { get; set; } = "";
        private string _email = "";
        
        public string Email
        {
            get => _email;
            set
            {
                if (value.IsValidEmail())
                {
                    _email = value;
                }
                else
                {
                    throw new ArgumentException("Invalid email address");
                }
            }
        }


        public Account(int id, string username, string email, string password)
        {
            Id = id;
            Username = username;
            Email = email;
            Password = password;
        }
    }
}