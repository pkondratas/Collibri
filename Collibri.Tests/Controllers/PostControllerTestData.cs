using Collibri.Models;

namespace Collibri.Tests.Controllers
{
    public class CreatePostTestData : TheoryData<Post, Post>
    {
        public CreatePostTestData()
        {
            //Correct input

            Add(
                new Post()
                {
                    Id = Guid.Empty, CreatorUsername = "user", Title = "title", LikeCount = 1, DislikeCount = 1,
                    SectionId = 1, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                },
                new Post()
                {
                    Id = Guid.Empty, CreatorUsername = "user", Title = "title", LikeCount = 1, DislikeCount = 1,
                    SectionId = 1, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                });
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
                    new Post()
                    {
                        Id = Guid.Empty, CreatorUsername = "user1", Title = "title1", LikeCount = 1, DislikeCount = 1,
                        SectionId = 1, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                    },
                    new Post()
                    {
                        Id = Guid.Empty, CreatorUsername = "user2", Title = "title2", LikeCount = 1, DislikeCount = 1,
                        SectionId = 1, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                    }
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
                new Post()
                {
                    Id = new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), CreatorUsername = "user", Title = "title",
                    LikeCount = 1, DislikeCount = 1, SectionId = 1, CreationDate = DateTime.Now,
                    LastUpdatedDate = DateTime.Now
                },
                new Post()
                {
                    Id = new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), CreatorUsername = "user", Title = "title",
                    LikeCount = 1, DislikeCount = 1, SectionId = 1, CreationDate = DateTime.Now,
                    LastUpdatedDate = DateTime.Now
                },
                200);
            //Failing input
            Add(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"),
                new Post()
                {
                    Id = new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), CreatorUsername = "user", Title = "title",
                    LikeCount = 1, DislikeCount = 1, SectionId = 1, CreationDate = DateTime.Now,
                    LastUpdatedDate = DateTime.Now
                },
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
                new Post()
                {
                    Id = new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), CreatorUsername = "user", Title = "title",
                    LikeCount = 1, DislikeCount = 1, SectionId = 1, CreationDate = DateTime.Now,
                    LastUpdatedDate = DateTime.Now
                });
            //Failing input
            Add(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a62"),
                null);
        }
    }
}