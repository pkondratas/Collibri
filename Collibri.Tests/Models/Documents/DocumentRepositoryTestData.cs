using Collibri.Models.Documents;

namespace Collibri.Tests.Models.Documents;

public class CreateDocumentTestData : TheoryData<int, Document, Document?, List<Document>>
{
    public CreateDocumentTestData()
    {
            //Correct input
        Add(0,new Document(6,Guid.NewGuid(), "title", "text",0), null,
            new List<Document>
            {
                new Document(15,Guid.NewGuid(), "title", "text",0),
                new Document(481,Guid.NewGuid(), "title", "text",0)
            });
        //Failling input
        Add(0,new Document(50,Guid.NewGuid(), "title", "text",0), null,
            new List<Document>
            {
                new Document(50,Guid.NewGuid(), "title", "text",0),
                new Document(481,Guid.NewGuid(), "title", "text",0)
            });
    }
}
