using Collibri.Dtos;
using Collibri.Repositories.DbImplementation;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Controllers
{
    [Route("/v1/register")]
    [ApiController]
    public class RegisterController : Controller
    {
        private readonly DbRegisterRepository _registerRepository;

        public RegisterController(DbRegisterRepository registerRepository)
        {
            _registerRepository = registerRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CreateAccountAsync([FromBody] AccountDTO newAccount)
        {
            var response = await _registerRepository.CreateAccountAsync(newAccount);

            return response == null ? BadRequest() : Ok(response);
        }
    }   
}