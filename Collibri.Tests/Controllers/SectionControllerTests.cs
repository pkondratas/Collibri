using Collibri.Controllers;
using Collibri.Models.Sections;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Tests.Controllers
{
    public class SectionControllerTests
    {
        [Theory]
        [ClassData(typeof(CreateSectionTestData))]
        public void CreateSection_Should_ReturnSection_WhenNameNonexistent(
            Section section, 
            Section? methodResult, 
            int? statusCode)
        {   
            //Assign
            var repository = new Mock<ISectionRepository>();
            var controller = new SectionController(repository.Object);
            repository
                .Setup(x => x.CreateSection(section, "roomName")).Returns(methodResult);
            
            //Act
            var actual = controller.CreateSection(section, "roomName") as ObjectResult;
            
            //Assert
            Assert.Equal(statusCode, actual?.StatusCode);
        }

        [Theory]
        [ClassData(typeof(GetAllSectionsTestData))]
        public void GetAllSections_Should_ReturnAllSections(string roomName, List<Section> list)
        {
            //Assign
            var repository = new Mock<ISectionRepository>();
            var controller = new SectionController(repository.Object);
            repository
                .Setup(x => x.GetAllSections(roomName)).Returns(list);
            
            //Act
            var actual = controller.GetAllSections(roomName) as ObjectResult;
            
            //Assert
            Assert.IsType<List<Section>>(actual.Value);
            Assert.Equal(list, actual.Value);
        }
    }
}
