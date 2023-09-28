using Collibri.Models.Sections;

namespace Collibri.Tests.Controllers
{
    public class CreateSectionTestData : TheoryData<Section, Section?, int?>
    {
        public CreateSectionTestData()
        {
            //Correct input
            Add(new Section(0, 1, "NewSectionName"), new Section(123, 1, "NewSectionName"), 200);
            //Failing input
            Add(new Section(0, 1, "NewSectionName"), null, 409);
        }
    }

    public class GetAllSectionsTestData : TheoryData<int, IEnumerable<Section>>
    {
        public GetAllSectionsTestData()
        {
            //Correct input only
            Add(1,
                new List<Section>
                {
                    new Section(12345, 1, "Section1"),    
                    new Section(23456, 1, "Section2")    
                }.AsEnumerable()
            );
            Add(1, new List<Section>().AsEnumerable());
        }
    }

    public class UpdateSectionByIdTestData : TheoryData<Section, Section?, int, int>
    {
        public UpdateSectionByIdTestData()
        {
            //Correct input
            Add(new Section(0, 2, "Old name"), new Section(12345, 2, "New name"), 12345, 200);
            //Failing input
            Add(new Section(0, 2, "Old name"), null, 23456, 404);
        }
    }
    public class DeleteSectionByIdTestData : TheoryData<int, Section?, int>
    {
        public DeleteSectionByIdTestData()
        {
            //Correct input
            Add(123, new Section(2345, 123, "Deleted section"), 200);
            //Failing input
            Add(123, null, 404);
        }
    }
}

