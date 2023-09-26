using Collibri.Models.Documents;
using Collibri.Models.Sections;
using Collibri.Tests.Controllers;

namespace Collibri.Tests.Models.Documents;

public class CreateDocumentTestData : TheoryData<int, Document, List<Document>>
{
    public CreateDocumentTestData()
    {
        //Correct input
        Add(0, new Document(6, Guid.NewGuid(), "title", "text", 0),
            new List<Document>
            {
                new Document(15, Guid.NewGuid(), "title", "text", 0),
                new Document(481, Guid.NewGuid(), "title", "text", 0)
            });
        //Failling input
        Add(0, new Document(50, Guid.NewGuid(), "title", "text", 0),
            new List<Document>
            {
                new Document(50, Guid.NewGuid(), "title", "text", 0),
                new Document(481, Guid.NewGuid(), "title", "text", 0)
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
                new Document(123, Guid.NewGuid(), "matke", "text", 5),
                new Document(456, Guid.NewGuid(), "matke", "text", 5)
            }
        );
        Add(1,
            new List<Document>
            {
                new Document(123, Guid.NewGuid(), "matke", "text", 5),
                new Document(456, Guid.NewGuid(), "matke", "text", 4)
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
        Add(new Document(123, sameGuid, "new matke", "new text", 5),
            new Document(123, sameGuid, "new matke", "new text", 5), 123,
            new List<Document>
            {
                new Document(456, Guid.NewGuid(), "random", "random", 5),
                new Document(123, sameGuid, "to update", "to update", 5)
            }
        );
        //Failing input
        Add(new Document(123, Guid.NewGuid(), "matke", "text", 5), null, 123,
            new List<Document>
            {
                new Document(456, Guid.NewGuid(), "random", "random", 5),
                new Document(12378, Guid.NewGuid(), "to update", "to update", 5)
            }
        );
        //Failing input

        Add(new Document(123, Guid.NewGuid(), "matke", "text", 5), null, 123, new List<Document>());
    }
}

public class DeleteDocumentTestData : TheoryData<int, Document?, List<Document>>
{
    public DeleteDocumentTestData()
    {
        Guid sameGuid = new Guid();
        //Correct input
        Add(123, new Document(123, sameGuid, "matke to delete", "text to delete", 5),
            new List<Document>
            {
                new Document(4561, Guid.NewGuid(), "matke random", "text random", 7),
                new Document(123, sameGuid, "matke to delete", "text to delete", 5)
            });
        //Failing input
        Add(123, null,
            new List<Document>
            {
                new Document(4561, Guid.NewGuid(), "matke random", "text random", 7),
                new Document(459, Guid.NewGuid(), "matke to delete", "text to delete", 5)
            });
        Add(123, null, new List<Document>());
    }
}