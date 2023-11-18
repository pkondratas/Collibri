using Collibri.Dtos;
using Collibri.Repositories.DbImplementation;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Controllers
{
    [Route("/v1/register")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly DbAccountRepository _accountRepository;

        public AccountController(DbAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CreateAccount([FromBody] AccountDTO newAccount)
        {
            var response = await _accountRepository.CreateAccount(newAccount);
            Console.WriteLine("aaa");
            return response == null ? BadRequest() : Ok(response);
        }
    }   
}