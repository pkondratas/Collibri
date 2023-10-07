using Collibri.Models.Posts;

namespace Collibri.Tests.Models.Posts
{
    public class CreatePostTestData : TheoryData<Post>
    {
        public CreatePostTestData()
        {
<<<<<<< HEAD
=======
            //Correct input
>>>>>>> master
            Add(new Post(Guid.NewGuid(), "user1", "title1", 1, 0, 0, 1,  DateTime.Now, DateTime.Now));
        }
    }

    public class GetAllPostsTestData : TheoryData<int, List<Post>>
    {
        public GetAllPostsTestData()
        {
<<<<<<< HEAD
=======
            //Correct inputs
>>>>>>> master
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
<<<<<<< HEAD
    
    public class DeletePostByIdTestData : TheoryData<Guid, Post?, List<Post>>
    {
        public DeletePostByIdTestData()
        {
            //Correct input
            Add(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"),
                new Post(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), "user1", "title1", 1, 0, 0, 1,  new DateTime(), new DateTime()),
=======

    public class UpdatePostByIdTestData : TheoryData<Guid, Post, Post?, List<Post>>
    {
        public UpdatePostByIdTestData()
        {
            //Correct input
            Add(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"),
                new Post(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), "user1", "new title", 1, 2, 1, 1,  new DateTime(), new DateTime()),
                new Post(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), "user1", "new title", 1, 2, 1, 1,  new DateTime(), new DateTime()),
>>>>>>> master
                new List<Post>
                {
                    new Post(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), "user1", "title1", 1, 0, 0, 1,  new DateTime(), new DateTime()),
                    new Post(Guid.NewGuid(), "user2", "title2", 1, 0, 0, 1,  new DateTime(), new DateTime()),
                    new Post(Guid.NewGuid(), "user3", "title3", 2, 0, 0, 1,  new DateTime(), new DateTime())
                }
            );
<<<<<<< HEAD
            //Failing input
            Add(new Guid("a4e38bc3-2dc0-4c61-a4c9-5ab59f8a5f57"),
                null,
                new List<Post>
                {
                    new Post(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), "user1", "title1", 1, 0, 0, 1,  new DateTime(), new DateTime()),
                }
            );
=======
            //Failing inputs
            Add(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"),
                new Post(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), "user1", "new title", 1, 2, 1, 1,  new DateTime(), new DateTime()),
                null,
                new List<Post>
                {
                    new Post(new Guid("222222a3-2297-48cf-9d4d-2222224a2262"), "user1", "title1", 1, 0, 0, 1, new DateTime(), new DateTime()),
                    new Post(new Guid("222222a3-2297-48cf-9d4d-2222224a2261"), "user2", "title2", 1, 0, 0, 1, new DateTime(), new DateTime())
                }
            );
            Add(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"),
                new Post(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), "user1", "new title", 1, 2, 1, 1,  new DateTime(), new DateTime()),
                null,
                new List<Post>()
            );
>>>>>>> master
        }
    }
}
