using Collibri.Models.Sections;

namespace Collibri.Tests.Models.Sections
{
    public class CreateSectionTestData : TheoryData<Section, Section?, List<Section>>
    {
        public CreateSectionTestData() 
        {
            //Correct input
            Add(new Section(0, 1, "Section1"), null, 
                new List<Section>
                {
                    new Section(12345, 1, "Section2"),
                    new Section(23456, 1, "Section3")
                }
            );
            //Correct input
            Add(new Section(0, 1, "Section1"), null,
                new List<Section>
                {
                    new Section(12345, 2, "Section1"),
                    new Section(23456, 1, "Section3")
                }
            );
            //Incorrect input
            Add(new Section(0, 1, "Section1"), null, 
                new List<Section>
                {
                    new Section(12345, 1, "Section1"),
                    new Section(23456, 1, "Section3")
                }
            );
        }
    }

    public class GetAllSectionsTestData : TheoryData<int, List<Section>>
    {
        public GetAllSectionsTestData()
        {
            Add(1, 
                new List<Section>
                {
                    new Section(12345, 1, "Section1"),
                    new Section(23456, 1, "Section2")        
                }
            );
            Add(1, 
                new List<Section>
                {
                    new Section(12345, 1, "Section1"),
                    new Section(23456, 2, "Section2")        
                }
            );
            Add(1, new List<Section>());
        }
    }
}

