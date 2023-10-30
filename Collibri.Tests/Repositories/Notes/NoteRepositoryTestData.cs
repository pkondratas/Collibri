using Collibri.Models;

namespace Collibri.Tests.Repositories.Notes
{
    public class CreateNoteTestData : TheoryData<Note, Note?, List<Note>>
    {
        public CreateNoteTestData()
        {
            Add(new Note()
                {
                    Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 111, PostId = Guid.NewGuid()
                }, null,
                new List<Note>
                {
                    new Note()
                    {
                        Author = "NoteAuthor1", Name = "NoteName1", Text = "NoteText1", Id = 111,
                        PostId = Guid.NewGuid()
                    },
                    new Note()
                    {
                        Author = "NoteAuthor2", Name = "NoteName2", Text = "NoteText2", Id = 111,
                        PostId = Guid.NewGuid()
                    }
                }
            );

            Add(new Note()
                {
                    Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 111, PostId = Guid.NewGuid()
                }, null,
                new List<Note>
                {
                    new Note()
                    {
                        Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 123, PostId = Guid.NewGuid()
                    },
                    new Note()
                    {
                        Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 1234, PostId = Guid.NewGuid()
                    }
                }
            );
            Add(new Note()
                {
                    Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 111, PostId = Guid.NewGuid()
                }, null,
                new List<Note>
                {
                    new Note()
                    {
                        Author = "NoteAuthor", Name = "Existing", Text = "NoteText", Id = 111, PostId = Guid.NewGuid()
                    },
                    new Note()
                    {
                        Author = "NoteAuthor", Name = "Existing2", Text = "NoteText", Id = 111, PostId = Guid.NewGuid()
                    }
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
                    new Note()
                    {
                        Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 111, PostId = Guid.NewGuid()
                    },
                    new Note()
                    {
                        Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 112, PostId = Guid.NewGuid()
                    },
                    new Note()
                    {
                        Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 113, PostId = Guid.NewGuid()
                    }
                }
            );
            Add(101,
                new List<Note>
                {
                    new Note()
                    {
                        Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 111, PostId = Guid.NewGuid()
                    },
                    new Note()
                    {
                        Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 112, PostId = Guid.NewGuid()
                    },
                    new Note()
                    {
                        Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 113, PostId = Guid.NewGuid()
                    }
                }
            );
            Add(111,
                new List<Note>
                {
                    new Note()
                    {
                        Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 111, PostId = Guid.NewGuid()
                    },
                    new Note()
                    {
                        Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 112, PostId = Guid.NewGuid()
                    },
                    new Note()
                    {
                        Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", Id = 113, PostId = Guid.NewGuid()
                    }
                }
            );
        }
    }

    public class DeleteNoteTestData : TheoryData<int, Note?, List<Note>>
    {
        private readonly Note? _expected1 = new Note()
            { Id = 1010, Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", PostId = Guid.NewGuid() };


        public DeleteNoteTestData()
        {
            Add(1010, _expected1,
                new List<Note>
                {
                    _expected1,
                    new Note()
                    {
                        Id = 2020, Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", PostId = Guid.NewGuid()
                    },
                    new Note()
                    {
                        Id = 3030, Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", PostId = Guid.NewGuid()
                    }
                }
            );
            Add(4040, null,
                new List<Note>
                {
                    new Note()
                    {
                        Id = 1010, Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", PostId = Guid.NewGuid()
                    },
                    new Note()
                    {
                        Id = 2020, Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", PostId = Guid.NewGuid()
                    },
                    new Note()
                    {
                        Id = 3030, Author = "NoteAuthor", Name = "NoteName", Text = "NoteText", PostId = Guid.NewGuid()
                    }
                }
            );
        }
    }
}