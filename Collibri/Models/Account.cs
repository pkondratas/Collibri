using Microsoft.AspNetCore.Identity;
using Collibri.Repositories.ExtensionMethods;
using Serilog;

namespace Collibri.Models
{
    public class CustomAccountException : Exception
    {
        public string InvalidField { get; }

        public CustomAccountException(string message, string invalidField) : base(message)
        {
            InvalidField = invalidField;
        }
    }

    public class Account : IdentityUser<Guid>
    {
        public virtual ICollection<RoomMember> RoomMembers { get; set; }

        public new string Email
        {
            get => base.Email;
            set
            {
                try
                {
                    ValidateEmail(value);
                    base.Email = value;
                }
                catch (CustomAccountException ex)
                {
                    Log.Error(ex, "Error setting email: {ErrorMessage}, Invalid Field: {InvalidField}", ex.Message,
                        ex.InvalidField);
                }
            }
        }

        private void ValidateEmail(string email)
        {
            if (!email.IsValidEmail())
            {
                throw new CustomAccountException("Invalid email address", nameof(Email));
            }
        }

        public Account()
        {
        }
        // public int Id { get; set; }
        // private string _email = "";
        //
        // public string Email
        // {
        //     get => _email;
        //     set
        //     {
        //         if (value.IsValidEmail())
        //         {
        //             _email = value;
        //         }
        //         else
        //         {
        //             throw new ArgumentException("Invalid email address");
        //         }
        //     }
        // }
        //
        // public string Password { get; set; } = "";


        // public Account(int id, string username, string email, string password)
        // {
        //     Id = id;
        //     Username = username;
        //     Email = email;
        //     Password = password;
        // }
    }
}
