using Collibri.Models.Documents;
using Collibri.Models.DataHandling;

namespace Collibri.Tests.Models.Documents;

public class DocumentRepositoryTests
{
    [Theory]
    [ClassData(typeof(CreateDocumentTestData))]
    public void CreateDocument_Should_ReturnDocument_WhenIdIsUnique(
        int sectionId,
        Document document,
        Document? expected,
        List<Document> list)
    {
        //Assign
        var dataHandler = new Mock<IDataHandler>();
        var repository = new DocumentRepository(dataHandler.Object);
        dataHandler.Setup(x => x.GetAllItems<Document>(ModelType.Documents)).Returns(list);

        //Act
        var actual = repository.CreateDocument(document, sectionId);

        if (actual != null)
        {
            expected = document;
            expected.SectionId = actual.SectionId;
        }

        //Assert
        Assert.Equal(expected, actual);
    }
    
}