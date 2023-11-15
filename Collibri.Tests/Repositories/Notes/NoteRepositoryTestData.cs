using Collibri.Dtos;

namespace Collibri.Tests.Repositories.Notes
{
    public class CreateNoteTestData : TheoryData<NoteDTO, NoteDTO?, List<NoteDTO>>
    {
        public CreateNoteTestData()
        {
            Add(new NoteDTO(Guid.NewGuid(), "testNote1", "testText1", "author1"), null,
                new List<NoteDTO>
                {
                    new NoteDTO(Guid.NewGuid(),"existingNote", "text", "existingAuthor"),
                    new NoteDTO(Guid.NewGuid(),"existingNote2", "text", "existingAuthor2")
                }
            );
            
            Add(new NoteDTO(Guid.NewGuid(),"testNote1", "testText1", "author1"), null,
                new List<NoteDTO>
                {
                    new NoteDTO(Guid.NewGuid(),"testNote1", "text", "existingAuthor"),
                    new NoteDTO(Guid.NewGuid(),"existingNote2", "text", "existingAuthor2")
                }
            );
            Add(new NoteDTO(Guid.NewGuid(),"testNote1", "testText1", "author1"), null,
                new List<NoteDTO>
                {
                    new NoteDTO(Guid.NewGuid(),"existingNote", "text", "existingAuthor"),
                    new NoteDTO(Guid.NewGuid(),"testNote1", "text", "existingAuthor2")
                }
            );
        }
    }

    public class GetAllNotesInSectionTestData : TheoryData<int, List<NoteDTO>>
    {
        public GetAllNotesInSectionTestData()
        {
            Add(111,
                new List<NoteDTO>
                {
                    new NoteDTO(Guid.NewGuid(),"existingNote1", "text", "existingAuthor1"),
                    new NoteDTO(Guid.NewGuid(),"existingNote2", "text", "existingAuthor2"),
                    new NoteDTO(Guid.NewGuid(),"existingNote3", "text", "existingAuthor3")
                }
            );
            Add(101,
                new List<NoteDTO>
                {
                    new NoteDTO(Guid.NewGuid(),"existingNote1", "text", "existingAuthor1"),
                    new NoteDTO(Guid.NewGuid(),"existingNote2", "text", "existingAuthor2"),
                    new NoteDTO(Guid.NewGuid(),"existingNote3", "text", "existingAuthor3")
                }
            );
            Add(111,
                new List<NoteDTO>
                {
                    new NoteDTO(Guid.NewGuid(),"existingNote1", "text", "existingAuthor1"),
                    new NoteDTO(Guid.NewGuid(),"existingNote2", "text", "existingAuthor2"),
                    new NoteDTO(Guid.NewGuid(),"existingNote3", "text", "existingAuthor3")
                }
            );
        }
    }

    public class DeleteNoteTestData : TheoryData<int, NoteDTO?, List<NoteDTO>>
    {
        private readonly NoteDTO? _expected1 = new NoteDTO(Guid.NewGuid(),"existingNote1", "text", "existingAuthor1", 1010);
        
        public DeleteNoteTestData()
        {
            Add(1010, _expected1,
                new List<NoteDTO>
                {
                    _expected1,
                    new NoteDTO(Guid.NewGuid(),"existingNote2", "text", "existingAuthor2", 2020),
                    new NoteDTO(Guid.NewGuid(),"existingNote3", "text", "existingAuthor3", 3030)
                }
            );
            Add(4040, null,
                new List<NoteDTO>
                {
                    new NoteDTO(Guid.NewGuid(),"existingNote1", "text", "existingAuthor1", 1010),
                    new NoteDTO(Guid.NewGuid(),"existingNote2", "text", "existingAuthor2", 2020),
                    new NoteDTO(Guid.NewGuid(),"existingNote3", "text", "existingAuthor3", 3030)
                }
            );
        }
    }
}

