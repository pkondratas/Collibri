using Collibri.Models.Sections;

namespace Collibri.Tests.Controllers
{
    public class CreateSectionTestData : TheoryData<Section, Section?, int?>
    {
        public CreateSectionTestData()
        {
            //Correct input
            Add(new Section(0, 1, "NewSectionName"), new Section(123, 1, "NewSectionName"), 200);
            //Incorrect input
            Add(new Section(0, 1, "NewSectionName"), null, null);
        }
    }

    public class GetAllSectionsTestData : TheoryData<string, List<Section>>
    {
        public GetAllSectionsTestData()
        {
            //Correct input only
            Add("Room1", 
                new List<Section>
                {
                    new Section(12345, 1, "Section1"),    
                    new Section(23456, 1, "Section2")    
                }
            );
            Add("Room2", new List<Section>());
        }
    }
}

