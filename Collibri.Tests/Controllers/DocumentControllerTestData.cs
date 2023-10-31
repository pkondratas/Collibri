using Collibri.Models;

namespace Collibri.Tests.Controllers
{
    public class CreateDocumentTestData : TheoryData<int, Document, Document?, int?>
    {
        public CreateDocumentTestData()
        {
            //Correct input
            Add(1, new Document(0, Guid.NewGuid(), "matke", "text", 0), new Document(1, Guid.NewGuid(), "matke", "text", 1),
                200);
            //Failing input
            Add(1, new Document(0, Guid.NewGuid(), "matke", "text", 1), null, 409);
        }
    }

    public class GetDocumentsTestData : TheoryData<int, IEnumerable<Document>>
    {
        public GetDocumentsTestData()
        {
            Add(1,
                new List<Document>
                {
                    new Document(123, Guid.NewGuid(), "matke", "text", 5),
                    new Document(456, Guid.NewGuid(), "matke", "text", 5)
                }.AsEnumerable()
            );
            Add(1, new List<Document>().AsEnumerable());
        }
    }

    public class UpdateDocumentTestData : TheoryData<Document, Document?, int, int>
    {
        public UpdateDocumentTestData()
        {
            // Correct input
            Add(new Document(123, Guid.NewGuid(), "old matke", " old text", 5),
                new Document(123, Guid.NewGuid(), "new matke", "new text", 5), 123, 200);
            //Failing input
            Add(new Document(123, Guid.NewGuid(), "old matke", " old text", 5), null, 123, 404);
        }
    }

    public class DeleteDocumentTestData : TheoryData<int, Document?, int>
    {
        public DeleteDocumentTestData()
        {
            //Correct input
            Add(123, new Document(123, Guid.NewGuid(), "matke", "text", 5), 200);
            //Failing input
            Add(123, null, 404);
        }
    }
}
