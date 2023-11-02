using Collibri.Models;

namespace Collibri.Tests.Controllers
{
    public class CreateDocumentTestData : TheoryData<string, Document, Document?, int?>
    {
        public CreateDocumentTestData()
        {
            var sameGuid = Guid.Parse("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61");
            //Correct input
            Add("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61", new Document(0, sameGuid, "matke", "text"), new Document(1, sameGuid, "matke", "text"),
                200);
            //Failing input
            Add("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61", new Document(0, Guid.NewGuid(), "matke", "text"), null, 409);
        }
    }

    public class GetDocumentsTestData : TheoryData<string, IEnumerable<Document>>
    {
        public GetDocumentsTestData()
        {
            Add("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61",
                new List<Document>
                {
                    new Document(123, Guid.NewGuid(), "matke", "text"),
                    new Document(456, Guid.NewGuid(), "matke", "text")
                }.AsEnumerable()
            );
            Add("2b8b88a3-cd97-48cf-9d4d-ef8db4ac4a61", new List<Document>().AsEnumerable());
        }
    }

    public class UpdateDocumentTestData : TheoryData<Document, Document?, int, int>
    {
        public UpdateDocumentTestData()
        {
            // Correct input
            Add(new Document(123, Guid.NewGuid(), "old matke", " old text"),
                new Document(123, Guid.NewGuid(), "new matke", "new text"), 123, 200);
            //Failing input
            Add(new Document(123, Guid.NewGuid(), "old matke", " old text"), null, 123, 404);
        }
    }

    public class DeleteDocumentTestData : TheoryData<int, Document?, int>
    {
        public DeleteDocumentTestData()
        {
            //Correct input
            Add(123, new Document(123, Guid.NewGuid(), "matke", "text"), 200);
            //Failing input
            Add(123, null, 404);
        }
    }
}
