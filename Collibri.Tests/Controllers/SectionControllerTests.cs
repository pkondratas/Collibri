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
            Assert.Equal(methodResult, actual?.Value);
        }
    }
}
