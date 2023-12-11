using Collibri.Dtos;
using Collibri.Models;

namespace Collibri.Tests.Repositories.Documents;

public class DbDocumentRepositoryTestData
{
    public class CreateDocumentTestData : TheoryData<string, DocumentDTO, DocumentDTO?, List<Document>>
    {
        public CreateDocumentTestData()
        {
            const string postId = "2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61";
            //Correct input
            Add(postId, new DocumentDTO(6, Guid.NewGuid(), "title", "text"), null,
                new List<Document>
                {
                    new Document
                    {
                        Id = 50, PostId = Guid.NewGuid(), Title = "title", Text = "text"
                    },
                    new Document
                    {
                        Id = 481, PostId = Guid.NewGuid(), Title = "title", Text = "text"
                    },
                });
            //Failling input
            Add(postId, new DocumentDTO(50, Guid.NewGuid(), "title", "text"), null,
                new List<Document>
                {
                    new Document
                    {
                        Id = 50, PostId = Guid.NewGuid(), Title = "title", Text = "text"
                    },
                    new Document
                    {
                        Id = 456, PostId = Guid.NewGuid(), Title = "matke", Text = "text"
                    }
                });
        }
    }

    public class GetDocumentsTestData : TheoryData<string, List<Document>>
    {
        public GetDocumentsTestData()
        {
            Add("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61",
                new List<Document>
                {
                    new Document
                    {
                        Id = 123, PostId = Guid.NewGuid(), Title = "matke", Text = "text"
                    },
                    new Document
                    {
                        Id = 456, PostId = Guid.NewGuid(), Title = "matke", Text = "text"
                    }
                }
            );
            Add("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61",
                new List<Document>
                {
                    new Document
                    {
                        Id = 123, PostId = Guid.NewGuid(), Title = "vienas", Text = "du"
                    },
                    new Document
                    {
                        Id = 456, PostId = Guid.NewGuid(), Title = "trys", Text = "keturi"
                    }
                }
            );
            Add("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61", new List<Document>());
        }
    }

    public class UpdateDocumentTestData : TheoryData<DocumentDTO, DocumentDTO?, int, List<Document>>
    {
        public UpdateDocumentTestData()
        {
            Guid sameGuid = new Guid();
            //Correct input
            Add(new DocumentDTO(123, sameGuid, "new matke", "new text"),
                new DocumentDTO(123, sameGuid, "new matke", "new text"), 123,
                new List<Document>
                {
                    new Document
                    {
                        Id = 456, PostId = sameGuid, Title = "random", Text = "random"
                    },
                    new Document
                    {
                        Id = 123, PostId = sameGuid, Title = "to update", Text = "to update"
                    }
                }
            );
            //Failing input
            Add(new DocumentDTO(123, Guid.NewGuid(), "matke", "text"), null, 123,
                new List<Document>
                {
                    new Document
                    {
                        Id = 456, PostId = Guid.NewGuid(), Title = "random", Text = "random"
                    },
                    new Document
                    {
                        Id = 12378, PostId = Guid.NewGuid(), Title = "to update", Text = "to update"
                    }
                }
            );
            //Failing input

            Add(new DocumentDTO(123, Guid.NewGuid(), "matke", "text"), null, 123, new List<Document>());
        }
    }

    public class DeleteDocumentTestData : TheoryData<int, DocumentDTO?, List<Document>>
    {
        public DeleteDocumentTestData()
        {
            Guid sameGuid = new Guid();
            //Correct input
            Add(123, new DocumentDTO(123, sameGuid, "matke to delete", "text to delete"),
                new List<Document>
                {
                    new Document
                    {
                        Id = 456789, PostId = Guid.NewGuid(), Title = "matke random", Text = "text random"
                    },
                    new Document
                    {
                        Id = 123, PostId = sameGuid, Title = "matke to delete", Text = "text to delete"
                    }
                });
            //Failing input
            Add(123, null,
                new List<Document>
                {
                    new Document
                    {
                        Id = 456789, PostId = Guid.NewGuid(), Title = "matke random", Text = "text random"
                    },
                    new Document
                    {
                        Id = 459, PostId = Guid.NewGuid(), Title = "matke to delete", Text = "text to delete"
                    }
                });
            Add(123, null, new List<Document>());
        }
    }
}