using Collibri.Models;

namespace Collibri.Tests.Repositories.Notes
{
    public class CreateNoteTestData : TheoryData<Note, Note?, List<Note>>
    {
        public CreateNoteTestData()
        {
            Add(new Note(Guid.NewGuid(), "testNote1", "testText1", "author1"), null,
                new List<Note>
                {
                    new Note(Guid.NewGuid(),"existingNote", "text", "existingAuthor"),
                    new Note(Guid.NewGuid(),"existingNote2", "text", "existingAuthor2")
                }
            );
            
            Add(new Note(Guid.NewGuid(),"testNote1", "testText1", "author1"), null,
                new List<Note>
                {
                    new Note(Guid.NewGuid(),"testNote1", "text", "existingAuthor"),
                    new Note(Guid.NewGuid(),"existingNote2", "text", "existingAuthor2")
                }
            );
            Add(new Note(Guid.NewGuid(),"testNote1", "testText1", "author1"), null,
                new List<Note>
                {
                    new Note(Guid.NewGuid(),"existingNote", "text", "existingAuthor"),
                    new Note(Guid.NewGuid(),"testNote1", "text", "existingAuthor2")
                }
            );
        }
    }

    public class GetAllNotesInSectionTestData : TheoryData<int, List<Note>>
    {
        public GetAllNotesInSectionTestData()
        {
            Add(111,
                new List<Note>
                {
                    new Note(Guid.NewGuid(),"existingNote1", "text", "existingAuthor1"),
                    new Note(Guid.NewGuid(),"existingNote2", "text", "existingAuthor2"),
                    new Note(Guid.NewGuid(),"existingNote3", "text", "existingAuthor3")
                }
            );
            Add(101,
                new List<Note>
                {
                    new Note(Guid.NewGuid(),"existingNote1", "text", "existingAuthor1"),
                    new Note(Guid.NewGuid(),"existingNote2", "text", "existingAuthor2"),
                    new Note(Guid.NewGuid(),"existingNote3", "text", "existingAuthor3")
                }
            );
            Add(111,
                new List<Note>
                {
                    new Note(Guid.NewGuid(),"existingNote1", "text", "existingAuthor1"),
                    new Note(Guid.NewGuid(),"existingNote2", "text", "existingAuthor2"),
                    new Note(Guid.NewGuid(),"existingNote3", "text", "existingAuthor3")
                }
            );
        }
    }

    public class DeleteNoteTestData : TheoryData<int, Note?, List<Note>>
    {
        private readonly Note? _expected1 = new Note(Guid.NewGuid(),"existingNote1", "text", "existingAuthor1", 1010);
        
        public DeleteNoteTestData()
        {
            Add(1010, _expected1,
                new List<Note>
                {
                    _expected1,
                    new Note(Guid.NewGuid(),"existingNote2", "text", "existingAuthor2", 2020),
                    new Note(Guid.NewGuid(),"existingNote3", "text", "existingAuthor3", 3030)
                }
            );
            Add(4040, null,
                new List<Note>
                {
                    new Note(Guid.NewGuid(),"existingNote1", "text", "existingAuthor1", 1010),
                    new Note(Guid.NewGuid(),"existingNote2", "text", "existingAuthor2", 2020),
                    new Note(Guid.NewGuid(),"existingNote3", "text", "existingAuthor3", 3030)
                }
            );
        }
    }
}

