using Collibri.Models;

namespace Collibri.Tests.Controllers
{
    public class CreateNoteTestData : TheoryData<Note, Note?, int?>
    {
        public CreateNoteTestData()
        {
            Add(new Note(Guid.NewGuid(), "NoteName", "NoteText", "NoteAuthor"), 
                new Note(Guid.NewGuid(), "NoteName", "NoteText", "NoteAuthor", 1), 
                200);
            
            Add(new Note(Guid.NewGuid(), "NoteName", "NoteText", "NoteAuthor"),
                null,
                409);
        }
    }

    // public class GetAllNotesInSectionTestData : TheoryData<int, IEnumerable<Note>>
    // {
    //     public GetAllNotesInSectionTestData()
    //     {
    //         Add(1,
    //             new List<Note>
    //             {
    //                 new Note(1, 10, Guid.NewGuid(), "NoteName", "NoteText", "NoteAuthor"),
    //                 new Note(1, 10, Guid.NewGuid(), "NoteName2", "NoteText2", "NoteAuthor2")
    //             }.AsEnumerable()
    //         );
    //         
    //         Add(1, new List<Note>().AsEnumerable());
    //     }
    // }
    
    public class UpdateNoteTestData : TheoryData<Note, Note?, int, int>
    {
        public UpdateNoteTestData()
        {
            Add(new Note(Guid.NewGuid(), "Old Name", "Old Text", "author", 1111),
                new Note(Guid.NewGuid(), "New Name", "New Text", "author", 1111),
                1111,
                200
            );
            
            Add(new Note(Guid.NewGuid(), "Old Name", "Old Text", "author", 1111), 
                null, 
                2222, 
                409);
        }
    }
}

