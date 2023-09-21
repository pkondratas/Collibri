using Collibri.Models.Section;

namespace Collibri.Tests.Controllers
{
    public class CreateSectionTestData : TheoryData<Section, Section?, int?>
    {
        public CreateSectionTestData()
        {
            Add(new Section("NewSectionName"), new Section("NewSectionName"), 200);
            Add(new Section("NewSectionName"), null, null);
        }
    }
}

