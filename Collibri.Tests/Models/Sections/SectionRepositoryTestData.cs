using Collibri.Models.Sections;

namespace Collibri.Tests.Models.Sections
{
    public class CreateSectionTestData : TheoryData<Section, Section?, string, List<Section>>
    {
        public CreateSectionTestData() 
        {
            //Correct input
            Add(new Section(0, 1, "Section1"), null, "Room1", 
                new List<Section>
                {
                    new Section(12345, 1, "Section2"),
                    new Section(23456, 1, "Section3")
                }
            );
            //Correct input
            Add(new Section(0, 1, "Section1"), null, "Room1", 
                new List<Section>
                {
                    new Section(12345, 2, "Section1"),
                    new Section(23456, 1, "Section3")
                }
            );
            //Incorrect input
            Add(new Section(0, 1, "Section1"), null, "Room1", 
                new List<Section>
                {
                    new Section(12345, 1, "Section1"),
                    new Section(23456, 1, "Section3")
                }
            );
        }
    }

    public class GetAllSectionsTestData : TheoryData<string, List<Section>>
    {
        public GetAllSectionsTestData()
        {
            Add("Room1", 
                new List<Section>
                {
                    new Section(12345, 1, "Section1"),
                    new Section(23456, 1, "Section2")        
                }
            );
            Add("Room1", new List<Section>());
        }
    }
}

