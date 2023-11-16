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
                try
                {
                    SetEmail(value);
                }
                catch (ArgumentException ex)
                {
                    Console.WriteLine($"Error setting email: {ex.Message}");
                }
            }
        }

        private void SetEmail(string value)
        {
            _email = value.IsValidEmail()
                ? value
                : throw new ArgumentException("Invalid email address");
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