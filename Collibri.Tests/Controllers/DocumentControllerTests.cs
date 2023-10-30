using Collibri.Controllers;
using Collibri.Models;
using Collibri.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Tests.Controllers
{
    public class DocumentControllerTests
    {
        [Theory]
        [ClassData(typeof(CreateDocumentTestData))]
        public void CreateDocument_Should_ReturnDocument_WhenIDNoneexistent(
            Document document,
            Document? methodResult,
            int? statusCode
        )
        {
            //Assign
            var repository = new Mock<IDocumentRepository>();
            var controller = new DocumentController(repository.Object);
            repository.Setup(x => x.CreateDocument(document, sectionId)).Returns(methodResult);

            //Act
            var actual = controller.CreateDocument(document, sectionId);

            //Assert
            if (methodResult == null)
            {
                Assert.IsType<ConflictResult>(actual);
                Assert.Equal(statusCode, ((ConflictResult)actual).StatusCode);
            }
            else
            {
                Assert.IsType<OkObjectResult>(actual);
                Assert.Equal(statusCode, ((OkObjectResult)actual).StatusCode);
            }
        }

        [Theory]
        [ClassData(typeof(GetDocumentsTestData))]
        public void GetDocuments_Should_ReturnDocumentsInSection_WhenNameNonexistent(
            int sectionId,
            IEnumerable<Document> list)
        {
            //Assign
            var repository = new Mock<IDocumentRepository>();
            var controller = new DocumentController(repository.Object);
            repository.Setup(x => x.GetDocuments(sectionId)).Returns(list);

            //Act
            var actual = controller.GetDocuments(sectionId) as ObjectResult;

            //Assert
            Assert.IsType<List<Document>>(actual?.Value);
            Assert.Equal(list, actual.Value);
        }

        [Theory]
        [ClassData(typeof(UpdateDocumentTestData))]
        public void UpdateDocument_Should_ReturnOkAndUpdatedDocument_WhenDocumentExists(
            Document document,
            Document? updatedDocument,
            int documentId,
            int statusCode)

        {
            //Assign
            var repository = new Mock<IDocumentRepository>();
            var controller = new DocumentController(repository.Object);
            repository.Setup(x => x.UpdateDocument(document, documentId)).Returns(updatedDocument);

            //Act
            var actual = controller.UpdateDocument(document, documentId);

            //Assert
            if (updatedDocument == null)
            {
                Assert.IsType<NotFoundResult>(actual);
                Assert.Equal(statusCode, ((NotFoundResult)actual).StatusCode);
            }
            else
            {
                Assert.IsType<OkObjectResult>(actual);
                Assert.Equal(statusCode, ((OkObjectResult)actual).StatusCode);
                Assert.Equal(updatedDocument, ((ObjectResult)actual).Value);
            }
        }

        [Theory]
        [ClassData(typeof(DeleteDocumentTestData))]
        public void DeleteDocument_Should_ReturnDeletedDocument_WhenDocumentExists(
            int documentId,
            Document? deletedDocument,
            int statusCode
        )

        {
            //Assign
            var repository = new Mock<IDocumentRepository>();
            var controller = new DocumentController(repository.Object);
            repository.Setup(x => x.DeleteById(documentId)).Returns(deletedDocument);

            //Act
            var actual = controller.DeleteDocument(documentId);

            //Assert
            if (deletedDocument == null)
            {
                Assert.IsType<NotFoundResult>(actual);
                Assert.Equal(statusCode, ((NotFoundResult)actual).StatusCode);
            }
            else
            {
                Assert.IsType<OkObjectResult>(actual);
                Assert.Equal(statusCode, ((OkObjectResult)actual).StatusCode);
                Assert.Equal(deletedDocument, ((ObjectResult)actual).Value);
            }
        }
    }
}

