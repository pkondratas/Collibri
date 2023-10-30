using Collibri.Models;

namespace Collibri.Tests.Repositories.Sections
{
    public class CreateSectionTestData : TheoryData<Section, Section?, List<Section>>
    {
        public CreateSectionTestData() 
        {
            //Correct input
            Add(new Section() { Id = 0, RoomId = 1, SectionName = "Section1" }, null, 
                new List<Section>
                {
                    new Section() { Id = 12345, RoomId = 1, SectionName = "Section2" },
                    new Section() { Id = 23456, RoomId = 1, SectionName = "Section3" }
                }
            );
            //Correct input
            Add(new Section() { Id = 0, RoomId = 1, SectionName = "Section1" }, null,
                new List<Section>
                {
                    new Section() { Id = 12345, RoomId = 1, SectionName = "Section2" },
                    new Section() { Id = 23456, RoomId = 1, SectionName = "Section3" }
                }
            );
            //Failing input
            Add(new Section() { Id = 0, RoomId = 1, SectionName = "Section1" }, null, 
                new List<Section>
                {
                    new Section() { Id = 12345, RoomId = 1, SectionName = "Section1" },
                    new Section() { Id = 23456, RoomId = 1, SectionName = "Section3" }
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
                    new Section() { Id = 12345, RoomId = 1, SectionName = "Section1" },
                    new Section() { Id = 23456, RoomId = 1, SectionName = "Section2" } 
                }
            );
            Add(1, 
                new List<Section>
                {
                    new Section() { Id = 12345, RoomId = 1, SectionName = "Section1" },
                    new Section() { Id = 23456, RoomId = 2, SectionName = "Section2" }         
                }
            );
            Add(1, new List<Section>());
        }
    }

    public class UpdateSectionByIdTestData : TheoryData<Section, Section?, int, List<Section>>
    {
        public UpdateSectionByIdTestData()
        {
            Add(new Section() { Id = 0, RoomId = 1, SectionName = "Updated section" }, new Section() { Id = 12345, RoomId = 1, SectionName = "Updated section" }, 12345,
                new List<Section>
                {
                    new Section() { Id = 12345, RoomId = 1, SectionName = "Old section" },
                    new Section() { Id = 23456, RoomId = 1, SectionName = "Another section" }
                }
            );
            Add(new Section() { Id = 0, RoomId = 1, SectionName = "Updated section" }, null, 12345,
                new List<Section>
                {
                    new Section() { Id = 23456, RoomId = 1, SectionName = "Random section" },
                    new Section() { Id = 34567, RoomId = 1, SectionName = "Another section" }
                }
            );
            Add(new Section() { Id = 0, RoomId = 1, SectionName = "Updated section" }, null, 12345, new List<Section>());
        }
    }

    public class DeleteSectionByIdTestData : TheoryData<int, Section?, List<Section>>
    {
        public DeleteSectionByIdTestData()
        {
            //Correct input
            Add(123, new Section() { Id = 123, RoomId = 1, SectionName = "Section to Delete" },
                new List<Section>
                {
                    new Section() { Id = 123456789, RoomId = 1, SectionName = "Random section" },
                    new Section() { Id = 123, RoomId = 1, SectionName = "Section to Delete" }
                }
            );
            //Failing input
            Add(123, null,
                new List<Section>
                {
                    new Section() { Id = 123456789, RoomId = 1, SectionName = "Random section" },
                    new Section() { Id = 123, RoomId = 1, SectionName = "Section to Delete" }
                }
            );
            //Failing input
            Add(123, null, new List<Section>());
        }
    }
}

