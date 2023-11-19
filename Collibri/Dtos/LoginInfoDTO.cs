namespace Collibri.Dtos
{
    public class LoginInfoDTO
    {
        public string Username { get; set; }
        public string Password { get; set; }

        public LoginInfoDTO()
        {
            
        }

        public LoginInfoDTO(string username, string password)
        {
            Username = username;
            Password = password;
        }
    }   
}