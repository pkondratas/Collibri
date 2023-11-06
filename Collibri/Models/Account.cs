namespace Collibri.Models;

public class Account
{
    public int Id { get; set; }
    public string Username { get; set; } = "";
    public string Email { get; set; } = "";
    public string Password { get; set; } = "";
    
    public Account()
    {
    }
    
    public Account(int id,string username, string email, string password)
    {
        Id = id;
        Username = username;
        Email = email;
        Password = password;
    }
}
