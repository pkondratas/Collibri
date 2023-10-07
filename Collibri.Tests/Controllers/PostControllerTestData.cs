using Collibri.Models.Posts;

namespace Collibri.Tests.Controllers
{
    public class CreatePostTestData : TheoryData<Post, Post>
    {
        public CreatePostTestData()
        {
            //Correct input
            Add(new Post(Guid.Empty, "user", "title", 1, 0, 0, 1, DateTime.Now, DateTime.Now),
                new Post(Guid.NewGuid(), "user", "title", 1, 0, 0, 1, DateTime.Now, DateTime.Now));
        }
    }   
    
    public class GetAllPostsTestData : TheoryData<int, IEnumerable<Post>>
    {
        public GetAllPostsTestData()
        {
            //Correct input
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

    public class UpdatePostByIdTestData : TheoryData<Guid, Post, Post?, int>
    {
        public UpdatePostByIdTestData()
        {
            //Correct input
            Add(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"),
                new Post(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), "user1", "title1", 1, 0, 0, 1,  DateTime.Now, DateTime.Now),
                new Post(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), "user1", "title1", 1, 0, 0, 1,  DateTime.Now, DateTime.Now),
                200);
            //Failing input
            Add(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"),
                new Post(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), "user1", "title1", 1, 0, 0, 1,  DateTime.Now, DateTime.Now),
                null,
                404);
        }
    }
    
    public class DeletePostByIdTestData : TheoryData<Guid, Post?>
    {
        public DeletePostByIdTestData()
        {
            //Correct input
            Add(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), 
                new Post(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), "user1", "new title", 1, 2, 1, 1,  new DateTime(), new DateTime()));
            //Failing input
            Add(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a62"), 
                null);
        }
    }
}