using Collibri.Models;

namespace Collibri.Tests.Controllers
{
    public class CreateNoteTestData : TheoryData<Note, Note?, int?>
    {
        public CreateNoteTestData()
        {
            
            Add(new Note()
                {
                    Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 111, PostId = Guid.NewGuid()
                }, 
                new Note()
                {
                    Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 111, PostId = Guid.NewGuid()
                }, 
                200);
            
            Add(new Note()
                {
                    Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 111, PostId = Guid.NewGuid()
                },
                null,
                409);
        }
    }

    public class GetAllNotesInSectionTestData : TheoryData<int, IEnumerable<Note>>
    {
        public GetAllNotesInSectionTestData()
        {
            Add(1,
                new List<Note>
                {
                    new Note()
                    {
                        Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 1, PostId = Guid.NewGuid()
                    },
                    new Note()
                    {
                        Author = "NoteAuthor2", Name = "NoteName2", Text = "NoteText2", Id = 111, PostId = Guid.NewGuid()
                    }
                }.AsEnumerable()
            );
            
            Add(1, new List<Note>().AsEnumerable());
        }
    }
    
    public class UpdateNoteTestData : TheoryData<Note, Note?, int, int>
    {
        public UpdateNoteTestData()
        {
            Add(new Note()
            {
                Author = "NoteAuthor", Name = "Old name", Text = "Old text", Id = 111, PostId = Guid.NewGuid()
            },
                new Note()
                {
                    Author = "NoteAuthor", Name = "New name", Text = "New text", Id = 111, PostId = Guid.NewGuid()
                },
                1111,
                200
            );
            
            Add(new Note()
                {
                    Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 111, PostId = Guid.NewGuid()
                }, 
                null, 
                2222, 
                409);
        }
    }
}

