using Collibri.Models.Sections;

namespace Collibri.Tests.Controllers
{
    public class CreateSectionTestData : TheoryData<Section, Section?, int?>
    {
        public CreateSectionTestData()
        {
            //Correct input
            Add(new Section(123, 1, "NewSectionName"), new Section(123, 1, "NewSectionName"), 200);
            //Incorrect input
            Add(new Section(123, 1, "NewSectionName"), null, null);
        }
    }
}

