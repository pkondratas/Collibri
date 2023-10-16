using Collibri.Models;
using Collibri.Repositories.DataHandling;
using Collibri.Repositories.FileBasedImplementation;

namespace Collibri.Tests.Repositories.Posts
{
    public class PostRepositoryTests
    {
        [Theory]
        [ClassData(typeof(CreatePostTestData))]
        public void CreatePost_Should_ReturnCreatePost(Post post)
        {   
            //Assign
            var dataHandler = new Mock<IDataHandler>();
            var repository = new PostRepository(dataHandler.Object);
            dataHandler
                .Setup(x => x.GetAllItems<Post>(ModelType.Posts)).Returns(new List<Post>());
            
            //Act
            var actual = repository.CreatePost(post);
            
            //Assert
            Assert.Equivalent(post.SectionId , actual.SectionId);
            Assert.True(Guid.Empty != actual.PostId);
        }

        [Theory]
        [ClassData(typeof(GetAllPostsTestData))]
        public void GetAllPosts_Should_ReturnAllPosts(
            int sectionId,
            List<Post> list) 
        {
            //Assign
            var dataHandler = new Mock<IDataHandler>();
            var repository = new PostRepository(dataHandler.Object);
            dataHandler
                .Setup(x => x.GetAllItems<Post>(ModelType.Posts)).Returns(list);
            
            //Act
            var actual = repository.GetAllPosts(sectionId);

            //Assert
            Assert.Equivalent(list.Where(x => x.SectionId == sectionId).AsEnumerable(), actual);
        }

        [Theory]
        [ClassData(typeof(UpdatePostByIdTestData))]
        public void UpdatePostById_Should_ReturnUpdatedPost_WhenExists(
            Guid postId,
            Post update,
            Post? expected,
            List<Post> list)
        {
            //Assign
            var dataHandler = new Mock<IDataHandler>();
            var repository = new PostRepository(dataHandler.Object);
            dataHandler
                .Setup(x => x.GetAllItems<Post>(ModelType.Posts)).Returns(list);

            //Act
            var actual = repository.UpdatePostById(postId, update);

            //Assert
            if (actual != null)
            {
                actual.CreationDate = new DateTime();
                actual.LastUpdatedDate = new DateTime();
            }
            
            Assert.Equivalent(expected, actual);
        }

        [Theory]
        [ClassData(typeof(DeletePostByIdTestData))]
        public void DeletePostById_Should_ReturnDeletedPost_IfExists(
            Guid postId,
            Post? expected,
            List<Post> list)
        {
            //Assign
            var dataHandler = new Mock<IDataHandler>();
            var repository = new PostRepository(dataHandler.Object);
            dataHandler
                .Setup(x => x.GetAllItems<Post>(ModelType.Posts)).Returns(list);

            //Act
            var actual = repository.DeletePostById(postId);

            //Assert
            Assert.Equivalent(expected, actual);
        }
    }
}

