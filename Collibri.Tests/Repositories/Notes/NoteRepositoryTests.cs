using Collibri.Models;
using Collibri.Repositories.DataHandling;
using Collibri.Repositories.FileBasedImplementation;

namespace Collibri.Tests.Repositories.Notes
{
    public class NoteRepositoryTests
    {
        [Theory]
        [ClassData(typeof(CreateNoteTestData))]
        public void CreateNoteTest(
            Note note,
            Note? expected,
            List<Note> list
            )
        {
            var dataHandler = new Mock<IDataHandler>();
            var repository = new FbNoteRepository(dataHandler.Object);
            dataHandler.Setup(x => x.GetAllItems<Note>(ModelType.Notes)).Returns(list);
            
            var actual = repository.CreateNote(note);
            if (actual != null)
            {
                expected = note;
                expected.Id = note.Id;
            }
            
            Assert.Equal(expected, actual);
        }

        [Theory]
        [ClassData(typeof(GetAllNotesInSectionTestData))]
        public void GetAllNotesInSectionTest(
            int sectionId,
            List<Note> list
            )
        {
            var dataHandler = new Mock<IDataHandler>();
            var repository = new FbNoteRepository(dataHandler.Object);
            dataHandler.Setup(x => x.GetAllItems<Note>(ModelType.Notes)).Returns(list);

            var actual = repository.GetAllNotesInSection(sectionId);
            
            Assert.Equal(list.Where(item => item.SectionId == sectionId).AsEnumerable(), actual);
        }

        [Theory]
        [ClassData(typeof(DeleteNoteTestData))]
        public void DeleteNoteTest(
            int id,
            Note? expected,
            List<Note> list
        )
        {
            var dataHandler = new Mock<IDataHandler>();
            var repository = new FbNoteRepository(dataHandler.Object);
            dataHandler.Setup(x => x.GetAllItems<Note>(ModelType.Notes)).Returns(list);

            var actual = repository.DeleteNote(id);
            
            Assert.Equal(expected, actual);
            Assert.DoesNotContain(actual, list);
        }
    }
}

