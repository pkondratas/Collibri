using System.Collections.Specialized;
using Collibri.Models.DataHandling;
using Collibri.Models.Sections;

namespace Collibri.Tests.Models.Sections
{
    public class SectionRepositoryTests
    {
        [Theory]
        [ClassData(typeof(CreateSectionTestData))]
        void CreateSection_Should_ReturnSection_WhenNonExistent(
            Section section,
            Section? expected,
            List<Section> list)
        {   
            //Assign
            var dataHandler = new Mock<IDataHandler>();
            var repository = new SectionRepository(dataHandler.Object);
            dataHandler
                .Setup(x => x.GetAllItems<Section>(ModelType.Sections)).Returns(list);

            //Act
            var actual = repository.CreateSection(section);
            if (actual != null)
            {
                expected = section;
                expected.SectionId = actual.SectionId;
            }
            
            //Assert
            Assert.Equal(expected, actual);
        }

        [Theory]
        [ClassData(typeof(GetAllSectionsTestData))]
        public void GetAllSection_Should_ReturnListOfSections(
            int roomId,
            List<Section> list)
        {
            //Assign
            var dataHandler = new Mock<IDataHandler>();
            var repository = new SectionRepository(dataHandler.Object);
            dataHandler
                .Setup(x => x.GetAllItems<Section>(ModelType.Sections)).Returns(list);
            
            //Act
            var actual = repository.GetAllSections(roomId);
            
            //Assert
            Assert.Equal(list.Where(item => item.RoomId == roomId).AsEnumerable(), actual);
        }
    }
}

