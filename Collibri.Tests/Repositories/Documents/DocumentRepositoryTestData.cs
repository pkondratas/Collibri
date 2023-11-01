using Collibri.Models;

namespace Collibri.Tests.Repositories.Documents
{
    public class CreateDocumentTestData : TheoryData<string, Document, List<Document>>
    {
        public CreateDocumentTestData()
        {
            //Correct input
            Add("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61", new Document(6, Guid.NewGuid(), "title", "text"),
                new List<Document>
                {
                    new Document(15, Guid.NewGuid(), "title", "text"),
                    new Document(481, Guid.NewGuid(), "title", "text")
                });
            //Failling input
            Add("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61", new Document(50, Guid.NewGuid(), "title", "text"),
                new List<Document>
                {
                    new Document(50, Guid.NewGuid(), "title", "text"),
                    new Document(481, Guid.NewGuid(), "title", "text")
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
                    new Document(123, Guid.NewGuid(), "matke", "text"),
                    new Document(456, Guid.NewGuid(), "matke", "text")
                }
            );
            Add("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61",
                new List<Document>
                {
                    new Document(123, Guid.NewGuid(), "matke", "text"),
                    new Document(456, Guid.NewGuid(), "matke", "text")
                }
            );
            Add("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61", new List<Document>());
        }
    }

    public class UpdateDocumentTestData : TheoryData<Document, Document?, int, List<Document>>
    {
        public UpdateDocumentTestData()
        {
            Guid sameGuid = new Guid();
            //Correct input
            Add(new Document(123, sameGuid, "new matke", "new text"),
                new Document(123, sameGuid, "new matke", "new text"), 123,
                new List<Document>
                {
                    new Document(456, Guid.NewGuid(), "random", "random"),
                    new Document(123, sameGuid, "to update", "to update")
                }
            );
            //Failing input
            Add(new Document(123, Guid.NewGuid(), "matke", "text"), null, 123,
                new List<Document>
                {
                    new Document(456, Guid.NewGuid(), "random", "random"),
                    new Document(12378, Guid.NewGuid(), "to update", "to update")
                }
            );
            //Failing input

            Add(new Document(123, Guid.NewGuid(), "matke", "text"), null, 123, new List<Document>());
        }
    }

    public class DeleteDocumentTestData : TheoryData<int, Document?, List<Document>>
    {
        public DeleteDocumentTestData()
        {
            Guid sameGuid = new Guid();
            //Correct input
            Add(123, new Document(123, sameGuid, "matke to delete", "text to delete"),
                new List<Document>
                {
                    new Document(4561, Guid.NewGuid(), "matke random", "text random"),
                    new Document(123, sameGuid, "matke to delete", "text to delete")
                });
            //Failing input
            Add(123, null,
                new List<Document>
                {
                    new Document(4561, Guid.NewGuid(), "matke random", "text random"),
                    new Document(459, Guid.NewGuid(), "matke to delete", "text to delete")
                });
            Add(123, null, new List<Document>());
        }
    }
}

