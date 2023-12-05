using Collibri.Dtos;
using Collibri.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Controllers
{
    [ApiController]
    [Route("/v1/tags")]
    public class TagController : ControllerBase
    {
        private readonly ITagRepository _tagRepository;
        private readonly IPostTagsRepository _postTagsRepository;

        public TagController(ITagRepository tagRepository, IPostTagsRepository postTagsRepository)
        {
            _tagRepository = tagRepository;
            _postTagsRepository = postTagsRepository;
        }
        
        [HttpPost("")]
        public IActionResult CreateTag([FromBody] TagDTO tag)
        {
            var result = _tagRepository.CreateTag(tag);
            return result == null ? Conflict() : Ok(result);
        }
        
        [HttpGet("")]
        public IActionResult GetAllTagsInRoom([FromQuery] int roomId)
        {
            return Ok(_tagRepository.GetAllTagsInRoom(roomId));
        }
        
        [HttpPut("")]
        public IActionResult UpdateTag([FromQuery] Guid tagId, [FromBody] TagDTO tag)
        {
            var updatedTag = _tagRepository.UpdateTag(tagId, tag);
        
            return updatedTag == null ? NotFound() : Ok(updatedTag);
        }
        
        [HttpDelete("")]
        public IActionResult DeleteTag([FromQuery] Guid tagId)
        {
         
            var deletedTag = _tagRepository.DeleteTag(tagId);
        
            return deletedTag == null ? NotFound() : Ok(deletedTag);
        }

        [HttpGet("on-post")]
        public IActionResult GetTagsOnPost([FromQuery] Guid postId)
        {
            return Ok(_tagRepository.GetTagsOnPost(postId));
        }
        
        // PostTags Repository
        // [HttpPost("add-to-post")]
        // public IActionResult AddToPost(Guid tagId, Guid postId)
        // {
        //     return _postTagsRepository.AddTagToPost(tagId, postId) ? Ok() : Conflict();
        // }
        //
        // [HttpDelete("remove-from-post")]
        // public IActionResult RemoveFromPost(Guid tagId, Guid postId)
        // {
        //     return _postTagsRepository.RemoveTagFromPost(tagId, postId) ? Ok() : NotFound();
        // }
    }
}

