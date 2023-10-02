using Collibri.Models.Posts;

namespace Collibri.Tests.Controllers
{
    public class CreatePostTestData : TheoryData<Post, Post>
    {
        public CreatePostTestData()
        {
            Add(new Post(Guid.Empty, "user", "title", 1, 0, 0, 1, DateTime.Now, DateTime.Now),
                new Post(Guid.NewGuid(), "user", "title", 1, 0, 0, 1, DateTime.Now, DateTime.Now));
        }
    }   
    public class GetAllPostsTestData : TheoryData<int, IEnumerable<Post>>
    {
        public GetAllPostsTestData()
        {
            Add(1, 
                new List<Post>
                {
                    new Post(Guid.NewGuid(), "user1", "title1", 1, 0, 0, 1,  DateTime.Now, DateTime.Now),
                    new Post(Guid.NewGuid(), "user2", "title2", 1, 2, 0, 1, DateTime.Now, DateTime.Now) 
                }.AsEnumerable()
            );
            Add(1, 
                new List<Post>().AsEnumerable()
            );
        }
    } 
}