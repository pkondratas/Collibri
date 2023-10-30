using Collibri.Models;

namespace Collibri.Tests.Repositories.Posts
{
    public class CreatePostTestData : TheoryData<Post>
    {
        public CreatePostTestData()
        {
            //Correct input
            Add(new Post()
            {
                Id = Guid.NewGuid(), CreatorUsername = "user1", Title = "title1", LikeCount = 1, DislikeCount = 1,
                SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
            });
        }
    }

    public class GetAllPostsTestData : TheoryData<int, List<Post>>
    {
        public GetAllPostsTestData()
        {
            //Correct inputs
            Add(1,
                new List<Post>
                {
                    new Post()
                    {
                        Id = Guid.NewGuid(), CreatorUsername = "user1", Title = "title1", LikeCount = 1,
                        DislikeCount = 1,
                        SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                    },
                    new Post()
                    {
                        Id = Guid.NewGuid(), CreatorUsername = "user2", Title = "title2", LikeCount = 1,
                        DislikeCount = 1,
                        SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                    },
                    new Post()
                    {
                        Id = Guid.NewGuid(), CreatorUsername = "user3", Title = "title3", LikeCount = 1,
                        DislikeCount = 1,
                        SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                    }
                }
            );
            Add(1, new List<Post>());
        }
    }

    public class UpdatePostByIdTestData : TheoryData<Guid, Post, Post?, List<Post>>
    {
        public UpdatePostByIdTestData()
        {
            //Correct input
            Add(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"),
                new Post()
                {
                    Id = new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), CreatorUsername = "user1", Title = "title1",
                    LikeCount = 1, DislikeCount = 1,
                    SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                },
                new Post()
                {
                    Id = new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), CreatorUsername = "user1", Title = "title1",
                    LikeCount = 1, DislikeCount = 1,
                    SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                },
                new List<Post>
                {
                    new Post()
                    {
                        Id = new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), CreatorUsername = "user1",
                        Title = "title1", LikeCount = 1, DislikeCount = 1,
                        SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                    },
                    new Post()
                    {
                        Id = Guid.NewGuid(), CreatorUsername = "user1", Title = "title1", LikeCount = 1,
                        DislikeCount = 1,
                        SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                    },
                    new Post()
                    {
                        Id = Guid.NewGuid(), CreatorUsername = "user1", Title = "title1", LikeCount = 1,
                        DislikeCount = 1,
                        SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                    }
                }
            );
            //Failing inputs
            Add(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"),
                new Post()
                {
                    Id = new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), CreatorUsername = "user1", Title = "title1",
                    LikeCount = 1, DislikeCount = 1,
                    SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                },
                null,
                new List<Post>
                {
                    new Post()
                    {
                        Id = new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), CreatorUsername = "user1",
                        Title = "title1", LikeCount = 1, DislikeCount = 1,
                        SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                    },
                    new Post()
                    {
                        Id = new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), CreatorUsername = "user2",
                        Title = "title2", LikeCount = 1, DislikeCount = 1,
                        SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                    }
                }
            );
            Add(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"),
                new Post()
                {
                    Id = new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), CreatorUsername = "user1",
                    Title = "new title", LikeCount = 1, DislikeCount = 1,
                    SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                },
                null,
                new List<Post>()
            );
        }
    }

    public class DeletePostByIdTestData : TheoryData<Guid, Post?, List<Post>>
    {
        public DeletePostByIdTestData()
        {
            //Correct input
            Add(new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"),
                new Post()
                {
                    Id = new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), CreatorUsername = "user1", Title = "title1",
                    LikeCount = 1, DislikeCount = 1,
                    SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                },
                new List<Post>
                {
                    new Post()
                    {
                        Id = new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), CreatorUsername = "user1",
                        Title = "title1", LikeCount = 1, DislikeCount = 1,
                        SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                    },
                    new Post()
                    {
                        Id = Guid.NewGuid(), CreatorUsername = "user2", Title = "title2", LikeCount = 1,
                        DislikeCount = 1,
                        SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                    },
                    new Post()
                    {
                        Id = Guid.NewGuid(), CreatorUsername = "user3", Title = "title3", LikeCount = 1,
                        DislikeCount = 1,
                        SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                    }
                }
            );
            //Failing input
            Add(new Guid("a4e38bc3-2dc0-4c61-a4c9-5ab59f8a5f57"),
                null,
                new List<Post>
                {
                    new Post()
                    {
                        Id = new Guid("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61"), CreatorUsername = "user1",
                        Title = "title1", LikeCount = 1, DislikeCount = 1,
                        SectionId = 0, CreationDate = DateTime.Now, LastUpdatedDate = DateTime.Now
                    },
                }
            );
        }
    }
}