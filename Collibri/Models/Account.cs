using Collibri.Repositories.ExtensionMethods;

namespace Collibri.Models
{
    public class Account
    {
        public int Id { get; set; }
        public string Username { get; set; } = "";
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

        public string Password { get; set; } = "";

        public Account()
        {
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