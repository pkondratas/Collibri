using Collibri.Models.Posts;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Controllers
{
    [ApiController]
    [Route("/v1/posts")]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;

        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [HttpPost("")]
        public IActionResult CreatePost([FromBody] Post post)
        {
            return Ok(_postRepository.CreatePost(post));
        }

        [HttpGet("")]
        public IActionResult GetAllPosts([FromQuery] int sectionId)
        {
            return Ok(_postRepository.GetAllPosts(sectionId));
        }

        [HttpPut("")]
        public IActionResult UpdatePostById([FromQuery] Guid postId, [FromBody] Post post)
        {
            var updatedPost = _postRepository.UpdatePostById(postId, post);

            return updatedPost == null ? NotFound() : Ok(updatedPost);
        }

        [HttpDelete("")]
        public IActionResult DeletePostById([FromQuery] Guid postId)
        {
            var deletedPost = _postRepository.DeletePostById(postId);

            return deletedPost == null ? NotFound() : Ok(deletedPost);
        }
    }   
}