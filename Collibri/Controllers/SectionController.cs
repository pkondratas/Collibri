using Collibri.Models.Sections;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Controllers
{
    [ApiController]
    [Route("/v1/sections")]
    public class SectionController : ControllerBase
    {
        private readonly ISectionRepository _sectionRepository;

        public SectionController(ISectionRepository sectionRepository)
        { 
            _sectionRepository = sectionRepository;
        }

        [HttpPost("")]
        public IActionResult CreateSection([FromBody] Section section)
        {
            var result = _sectionRepository.CreateSection(section);
            return result == null ? Conflict() : Ok(result);
        }
        
        [HttpGet("")]
        public IActionResult GetAllSections([FromQuery] int roomId)
        {
            return Ok(_sectionRepository.GetAllSections(roomId));
        }
    }
}
