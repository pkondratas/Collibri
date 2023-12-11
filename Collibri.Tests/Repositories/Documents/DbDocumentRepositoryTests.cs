using AutoMapper;
using Collibri.Data;
using Collibri.Dtos;
using Collibri.Models;
using Collibri.Repositories.DbImplementation;
using Microsoft.EntityFrameworkCore;
using Moq.EntityFrameworkCore;

namespace Collibri.Tests.Repositories.Documents;

public class DbDocumentRepositoryTests
{
    [Theory]
        [ClassData(typeof(DbDocumentRepositoryTestData.CreateDocumentTestData))]
        public void CreateDocument_Should_ReturnDocument_WhenIdIsUnique(
            string postId,
            DocumentDTO document,
            DocumentDTO? expected,
            List<Document> list)
        {
            //Assign
            var dataContext = new Mock<DataContext>();
            var profile = new Collibri.Repositories.DbImplementation.Mapper.AutoMapper();
            var configuration = new MapperConfiguration(cfg => cfg.AddProfile(profile));
            IMapper mapper = new Mapper(configuration);

            dataContext.Setup<DbSet<Document>>(x => x.Documents).ReturnsDbSet(list);

            var repository = new DbDocumentRepository(dataContext.Object, mapper);

            //Act
            var actual = repository.CreateDocument(document, postId);

            if (actual != null)
            {
                expected = document;
                expected.PostId = actual.PostId;
            }

            //Assert
            Assert.Equal(expected, actual);
        }

        [Theory]
        [ClassData(typeof(DbDocumentRepositoryTestData.GetDocumentsTestData))]
        public void GetDocuments_Should_ReturnDocumentsInSection(
            string postId,
            List<Document> list)
        {
            //Assign
            var dataContext = new Mock<DataContext>();
            var profile = new Collibri.Repositories.DbImplementation.Mapper.AutoMapper();
            var configuration = new MapperConfiguration(cfg => cfg.AddProfile(profile));
            IMapper mapper = new Mapper(configuration);

            dataContext.Setup<DbSet<Document>>(x => x.Documents).ReturnsDbSet(list);

            var expected = list.Where(i => i.PostId == Guid.Parse(postId)).AsEnumerable();
            
            var repository = new DbDocumentRepository(dataContext.Object, mapper);

            //Act
            var actual = repository.GetDocuments(postId);


            //Assert
            Assert.Equivalent(mapper.Map<List<DocumentDTO>>(expected), actual);
        }

        [Theory]
        [ClassData(typeof(DbDocumentRepositoryTestData.UpdateDocumentTestData))]
        public void UpdateDocument_Should_ReturnUpdatedDocument_IfExists(
            DocumentDTO document,
            DocumentDTO? expected,
            int documentId,
            List<Document> list)
        {
            //Assign
            var dataContext = new Mock<DataContext>();
            var profile = new Collibri.Repositories.DbImplementation.Mapper.AutoMapper();
            var configuration = new MapperConfiguration(cfg => cfg.AddProfile(profile));
            IMapper mapper = new Mapper(configuration);

            dataContext.Setup<DbSet<Document>>(x => x.Documents).ReturnsDbSet(list);

            var repository = new DbDocumentRepository(dataContext.Object, mapper);

            //Act
            var actual = repository.UpdateDocument(document, documentId);

            //Assert
            Assert.Equivalent(expected, actual);
        }

        [Theory]
        [ClassData(typeof(DbDocumentRepositoryTestData.DeleteDocumentTestData))]
        public void DeleteDocument_Should_ReturnDeletedDocument_IfExists(
            int documentId,
            DocumentDTO? expected,
            List<Document> list)
        {
            //Assign
            var dataContext = new Mock<DataContext>();
            var profile = new Collibri.Repositories.DbImplementation.Mapper.AutoMapper();
            var configuration = new MapperConfiguration(cfg => cfg.AddProfile(profile));
            IMapper mapper = new Mapper(configuration);

            dataContext.Setup<DbSet<Document>>(x => x.Documents).ReturnsDbSet(list);

            var repository = new DbDocumentRepository(dataContext.Object, mapper);

            //Act
            var actual = repository.DeleteById(documentId);


            //Assert
            Assert.Equivalent(expected, actual);
        }
}