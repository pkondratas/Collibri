namespace Collibri.Dtos
{
    public class AccountDTO
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public AccountDTO(string email, string username, string password)
        {
            Email = email;
            Username = username;
            Password = password;
        }
    }    
}
