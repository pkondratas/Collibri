using Collibri.Data;
using Collibri.Dtos;
using Collibri.Models;
using Collibri.Repositories.ExtensionMethods;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Collibri.Repositories.DbImplementation
{
    public class DbAccountRepository
    {
        private readonly UserManager<IdentityUser<Guid>> _userManager;

        public DbAccountRepository(UserManager<IdentityUser<Guid>> userManager)
        {
            _userManager = userManager;
        }
        
        public async Task<string?> CreateAccount(AccountDTO account)
        {
            var user = new IdentityUser<Guid> { UserName = account.Username, Email = account.Email};

            if (user.Email.IsValidEmail())
            {
                var result = await _userManager.CreateAsync(user, account.Password);
                if (result.Succeeded)
                {
                    return account.Username;
                }
            }

            return null;
        }
        
        // public Account? CreateAccount(Account account)
        // {
        //     async Task CreateAccountAsync()
        //     {
        //         await _userManager.CreateAsync();
        //         Console.WriteLine("ADDSDAD");
        //         Console.WriteLine("aaa");
        //     }
        //     
        //     // var createAccountTask = _registerTasks.CreateAccountAsync();
        //     var createAccountAsync = CreateAccountAsync();
        //     createAccountAsync.Start();
        //     
        //     
        //     return null;
        // }
        
        // private readonly DataContext _context;
        //
        // public DbAccountRepository(DataContext dataContext)
        // {
        //     _context = dataContext;
        // }
        //
        // public List<Account> GetAllAccounts()
        // {
        //     return _context.Accounts.ToList();
        // }
        //
        // public Account? UpdateAccount(string username, Account updatedAccount)
        // {
        //     var accountToUpdate = _context.Accounts.FirstOrDefault(account => account.Username == username);
        //
        //     if (accountToUpdate == null)
        //     {
        //         return null;
        //     }
        //     
        //     accountToUpdate.Username = updatedAccount.Username;
        //     accountToUpdate.Email = updatedAccount.Email;
        //     accountToUpdate.Password = updatedAccount.Password;
        //
        //     _context.Accounts.Update(accountToUpdate);
        //     _context.SaveChanges();
        //     
        //     return accountToUpdate;
        // }
        //
        // public bool DeleteAccount(string username)
        // {
        //     var accountToRemove = _context.Accounts.FirstOrDefault(account => account.Username == username);
        //
        //     if (accountToRemove == null)
        //         return false;
        //
        //     _context.Accounts.Remove(accountToRemove);
        //     _context.SaveChanges();
        //
        //     return true;
        // }
    }
}
