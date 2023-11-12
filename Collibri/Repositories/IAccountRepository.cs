using Collibri.Models;

namespace Collibri.Repositories
{
    public interface IAccountRepository
    {
        Account? CreateAccount(Account account);
        List<Account> GetAllAccounts();
        Account? UpdateAccount(string username, Account updatedAccount);
        bool DeleteAccount(string username);
    }
}