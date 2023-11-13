// using Collibri.Data;
// using Collibri.Models;
// using Collibri.Repositories.ExtensionMethods;
//
// namespace Collibri.Repositories.DbImplementation
// {
//     public class DbAccountRepository : IAccountRepository
//     {
//         private readonly DataContext _context;
//         
//         public DbAccountRepository(DataContext dataContext)
//         {
//             _context = dataContext;
//         }
//     
//         public Account? CreateAccount(Account account)
//         {
//             if (_context.Accounts.Any(existingAccount => existingAccount.Username == account.Username))
//             {
//                 return null;
//             }
//             
//             account.Id = new int().GenerateNewId(_context.Rooms.Select(x => x.Id).ToList());
//             _context.Accounts.Add(account);
//             _context.SaveChanges();
//             return account;
//         }
//
//         public List<Account> GetAllAccounts()
//         {
//             return _context.Accounts.ToList();
//         }
//
//         public Account? UpdateAccount(string username, Account updatedAccount)
//         {
//             var accountToUpdate = _context.Accounts.FirstOrDefault(account => account.Username == username);
//
//             if (accountToUpdate == null)
//             {
//                 return null;
//             }
//             
//             accountToUpdate.Username = updatedAccount.Username;
//             accountToUpdate.Email = updatedAccount.Email;
//             accountToUpdate.Password = updatedAccount.Password;
//
//             _context.Accounts.Update(accountToUpdate);
//             _context.SaveChanges();
//             
//             return accountToUpdate;
//         }
//
//         public bool DeleteAccount(string username)
//         {
//             var accountToRemove = _context.Accounts.FirstOrDefault(account => account.Username == username);
//         
//             if (accountToRemove == null)
//                 return false;
//         
//             _context.Accounts.Remove(accountToRemove);
//             _context.SaveChanges();
//
//             return true;
//         }
//     }
// }
