namespace Collibri.Repositories.ExtensionMethods;
using System.Text.RegularExpressions;

public static class StringMethods
{
    public static bool IsValidEmail(this string email)
    {
        string emailPattern = @"^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
        return Regex.IsMatch(email, emailPattern);
    }
}