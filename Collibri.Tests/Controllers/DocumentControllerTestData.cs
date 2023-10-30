using Collibri.Models;

namespace Collibri.Tests.Controllers
{
    public class CreateDocumentTestData : TheoryData<int, Document, Document?, int?>
    {
        public CreateDocumentTestData()
        {
            //Correct input
            Add(1, new Document(){Id =  0, PostId = Guid.NewGuid(), Text = "matke", Title = "text"},
                new Document(){Id =  1, PostId = Guid.NewGuid(), Text = "matke", Title = "text"},
                200);
            //Failing input
            Add(1, new Document(){Id =  0, PostId = Guid.NewGuid(), Text = "matke", Title = "text"}, null, 409);
        }
    }

    public class GetDocumentsTestData : TheoryData<int, IEnumerable<Document>>
    {
        public GetDocumentsTestData()
        {
            Add(1,
                new List<Document>
                {
                    new Document(){Id =  123, PostId = Guid.NewGuid(), Text = "matke", Title = "text"},
                    new Document(){Id =  456, PostId = Guid.NewGuid(), Text = "matke", Title = "text"}
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
            Add(new Document(){Id =  123, PostId = Guid.NewGuid(), Text = "old matke", Title = "old text"},
                new Document(){Id =  123, PostId = Guid.NewGuid(), Text = "new matke", Title = "new text"}, 123, 200);
            //Failing input
            Add(new Document(){Id =  123, PostId = Guid.NewGuid(), Text = "old matke", Title = "old text"}, null, 123, 404);
        }
    }

    public class DeleteDocumentTestData : TheoryData<int, Document?, int>
    {
        public DeleteDocumentTestData()
        {
            //Correct input
            Add(123, new Document(){Id =  123, PostId = Guid.NewGuid(), Text = "matke", Title = "text"}, 200);
            //Failing input
            Add(123, null, 404);
        }
    }
}
