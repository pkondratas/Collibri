using Collibri.Models.DataHandling;
using Collibri.Models.Posts;

namespace Collibri.Tests.Models.Sections
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
    }
}

