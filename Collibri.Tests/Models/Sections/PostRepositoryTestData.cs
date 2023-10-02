using Collibri.Models.Posts;

namespace Collibri.Tests.Models.Sections
{
    public class CreatePostTestData : TheoryData<Post>
    {
        public CreatePostTestData()
        {
            Add(new Post(Guid.NewGuid(), "user1", "title1", 1, 0, 0, 1,  DateTime.Now, DateTime.Now));
        }
    }

    public class GetAllPostsTestData : TheoryData<int, List<Post>>
    {
        public GetAllPostsTestData()
        {
            Add(1, 
                new List<Post>
                {
                    new Post(Guid.NewGuid(), "user1", "title1", 1, 0, 0, 1,  DateTime.Now, DateTime.Now),
                    new Post(Guid.NewGuid(), "user2", "title2", 1, 0, 0, 1,  DateTime.Now, DateTime.Now),
                    new Post(Guid.NewGuid(), "user3", "title3", 2, 0, 0, 1,  DateTime.Now, DateTime.Now)
                }
            );
            Add(1, new List<Post>());
        }
    }
}
