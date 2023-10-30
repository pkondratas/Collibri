using Collibri.Models;

namespace Collibri.Tests.Repositories.Documents
{
    public class CreateDocumentTestData : TheoryData<int, Document, List<Document>>
    {
        public CreateDocumentTestData()
        {
            //Correct input
            Add(0, new Document() { Id = 6, PostId = Guid.NewGuid(), Title = "title", Text = "text" },
                new List<Document>
                {
                    new Document() { Id = 15, PostId = Guid.NewGuid(), Title = "title", Text = "text" },
                    new Document() { Id = 481, PostId = Guid.NewGuid(), Title = "title", Text = "text" }
                });
            //Failling input
            Add(0, new Document() { Id = 50, PostId = Guid.NewGuid(), Title = "title", Text = "text" },
                new List<Document>
                {
                    new Document() { Id = 50, PostId = Guid.NewGuid(), Title = "title", Text = "text" },
                    new Document() { Id = 481, PostId = Guid.NewGuid(), Title = "title", Text = "text" }
                });
        }
    }

    public class GetDocumentsTestData : TheoryData<int, List<Document>>
    {
        public GetDocumentsTestData()
        {
            Add(1,
                new List<Document>
                {
                    new Document() { Id = 123, PostId = Guid.NewGuid(), Title = "title", Text = "text" },
                    new Document() { Id = 456, PostId = Guid.NewGuid(), Title = "title", Text = "text" }
                }
            );
            Add(1, new List<Document>());
        }
    }

    public class UpdateDocumentTestData : TheoryData<Document, Document?, int, List<Document>>
    {
        public UpdateDocumentTestData()
        {
            Guid sameGuid = new Guid();
            //Correct input
            Add(new Document() { Id = 123, PostId = sameGuid, Title = "new title", Text = "new text" },
                new Document() { Id = 123, PostId = sameGuid, Title = "new title", Text = "new text" }, 123,
                new List<Document>
                {
                    new Document() { Id = 456, PostId = Guid.NewGuid(), Title = "random", Text = "random" },
                    new Document() { Id = 123, PostId = sameGuid, Title = "to update", Text = "to update" }
                }
            );
            //Failing input
            Add(new Document() { Id = 123, PostId = sameGuid, Title = "new title", Text = "new text" }, null, 123,
                new List<Document>
                {
                    new Document() { Id = 456, PostId = Guid.NewGuid(), Title = "new title", Text = "new text" },
                    new Document() { Id = 123456, PostId = Guid.NewGuid(), Title = "new title", Text = "new text" }
                }
            );
            //Failing input

            Add(new Document() { Id = 123, PostId = Guid.NewGuid(), Title = "title", Text = "text" }, null, 123, new List<Document>());
        }
    }

    public class DeleteDocumentTestData : TheoryData<int, Document?, List<Document>>
    {
        public DeleteDocumentTestData()
        {
            Guid sameGuid = new Guid();
            //Correct input
            Add(123, new Document(){ Id = 123, PostId = sameGuid, Title = "new title", Text = "new text" },
                new List<Document>
                {
                    new Document(){ Id = 456789, PostId = Guid.NewGuid(), Title = "new title", Text = "new text" },
                    new Document(){ Id = 123, PostId = sameGuid, Title = "new title", Text = "new text" }
                });
            //Failing input
            Add(123, null,
                new List<Document>
                {
                    new Document(){ Id = 456789, PostId = Guid.NewGuid(), Title = "new title", Text = "new text" },
                    new Document(){ Id = 123, PostId = Guid.NewGuid(), Title = "new title", Text = "new text" }
                });
            Add(123, null, new List<Document>());
        }
    }
}

