using Collibri.Models.Notes;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Controllers
{
    [ApiController]
    [Route("/v1/Notes")]
    public class NoteController : ControllerBase
    {
        private readonly INoteRepository _noteRepository;

        public NoteController(INoteRepository noteRepository)
        {
            _noteRepository = noteRepository;
        }

        [HttpPost("")]
        public IActionResult CreateNote([FromBody] Note note)
        {
            var result =  _noteRepository.CreateNote(note);
            return result == null ? Conflict() : Ok(result);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetNote(int id)
        {
            var result = _noteRepository.GetNote(id);
            return result == null ? Conflict() : Ok(result);
        }
        
        [HttpGet("")]
        public List<Note> GetNote()
        {
            var result = _noteRepository.GetAllNotes();
            return result;
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteNote(int id)
        {
            var result = _noteRepository.DeleteNote(id);
            return result == null ? Conflict() : Ok(result);
        }
    }
}
