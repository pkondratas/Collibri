using Collibri.Models;

namespace Collibri.Tests.Controllers
{
    public class CreateSectionTestData : TheoryData<Section, Section?, int?>
    {
        public CreateSectionTestData()
        {
            //Correct input
            Add(new Section() { Id = 0, RoomId = 1, SectionName = "NewSectionName" },
                new Section() { Id = 123, RoomId = 1, SectionName = "NewSectionName" }, 200);
            //Failing input
            Add(new Section() { Id = 0, RoomId = 1, SectionName = "NewSectionName" }, null, 409);
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
                    new Section(){Id = 12345, RoomId = 1, SectionName = "Section1"},
                    new Section(){Id = 23456, RoomId = 1, SectionName = "Section2"}
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
            Add(new Section(){Id = 0, RoomId = 2, SectionName = "Old name"}, new Section(){Id = 12345, RoomId = 2, SectionName = "New name"}, 12345, 200);
            //Failing input
            Add(new Section(){Id = 0, RoomId = 2, SectionName = "Old name"}, null, 23456, 404);
        }
    }

    public class DeleteSectionByIdTestData : TheoryData<int, Section?, int>
    {
        public DeleteSectionByIdTestData()
        {
            //Correct input
            Add(123, new Section(){Id = 2345, RoomId = 123, SectionName = "Deleted section"}, 200);
            //Failing input
            Add(123, null, 404);
        }
    }
}