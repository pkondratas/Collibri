using Collibri.Controllers;
using Collibri.Models.Posts;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Tests.Controllers
{
    public class PostControllerTests
    {
        [Theory]
        [ClassData(typeof(CreatePostTestData))]
        public void CreatePost_Should_ReturnCreatedPost(
            Post post,
            Post expected)
        {
            //Assign
            var repository = new Mock<IPostRepository>();
            var controller = new PostController(repository.Object);
            repository
                .Setup(x => x.CreatePost(post)).Returns(expected);

            //Act
            var actual = controller.CreatePost(post);
            
            //Assert
            Assert.IsType<OkObjectResult>(actual);
            Assert.Equivalent(expected, ((OkObjectResult)actual).Value);
        }
        
        [Theory]
        [ClassData(typeof(GetAllPostsTestData))]
        public void GetAllPosts_Should_ReturnAllPosts(
            int sectionId,
            IEnumerable<Post> list)
        {
            //Assign
            var repository = new Mock<IPostRepository>();
            var controller = new PostController(repository.Object);
            repository
                .Setup(x => x.GetAllPosts(sectionId)).Returns(list);

            //Act
            var actual = controller.GetAllPosts(sectionId);
            
            //Assert
            Assert.IsType<OkObjectResult>(actual);
            Assert.Equivalent(list, ((OkObjectResult)actual).Value);
        }

        [Theory]
        [ClassData(typeof(UpdatePostByIdTestData))]
        public void UpdatePostById_Should_ReturnOkUpdatedPost_WhenExists(
            Guid postId,
            Post update,
            Post? expected,
            int statusCode)
        {
            //Assign
            var repository = new Mock<IPostRepository>();
            var controller = new PostController(repository.Object);
            repository
                .Setup(x => x.UpdatePostById(postId, update)).Returns(expected);

            //Act
            var actual = controller.UpdatePostById(postId, update);

            //Assert
            if (expected == null)
            {
                Assert.IsType<NotFoundResult>(actual);
                Assert.Equal(statusCode, ((NotFoundResult)actual).StatusCode);
            }
            else
            {
                Assert.IsType<OkObjectResult>(actual);
                Assert.Equal(statusCode, ((OkObjectResult)actual).StatusCode);
                Assert.Equivalent(expected.LikeCount, ((Post?)((ObjectResult)actual).Value).LikeCount);
                Assert.Equivalent(expected.DislikeCount, ((Post?)((ObjectResult)actual).Value).DislikeCount);
                Assert.Equivalent(expected.Title, ((Post?)((ObjectResult)actual).Value).Title);
            }
        }
    }
}

