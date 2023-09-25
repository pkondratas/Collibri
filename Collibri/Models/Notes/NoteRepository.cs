using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using Collibri.Models.DataHandling;

namespace Collibri.Models.Notes
{
    public class NoteRepository : INoteRepository
    {
        private readonly IDataHandler _dataHandler;

        public NoteRepository(IDataHandler dataHandler)
        {
            this._dataHandler = dataHandler;
        }

        private bool NoteExists(int id)
        {
            List<Note> noteList = _dataHandler.GetAllItems<Note>(ModelType.Notes);

            foreach (var note in noteList)
            {
                if (note.Id == id)
                {
                    return true;
                }
            }

            return false;
        }

        public Note? CreateNote(Note note)
        {
            List<Note> noteList = _dataHandler.GetAllItems<Note>(ModelType.Notes);
            
            foreach (var notes in noteList)
            {
                if (notes.RoomId.Equals(note.RoomId) && notes.SectionId.Equals(note.SectionId) && notes.Name.Equals(note.Name))
                {
                    return null;
                }
            }
            
            note.SectionId = new Random().Next(1, int.MaxValue);
            note.Id = new Random().Next(1, int.MaxValue);
            noteList.Add(note);
            
            _dataHandler.PostAllItems(noteList, ModelType.Notes);
            
            return note;
        }

        public Note? GetNote(int id)
        {
            List<Note> noteList = _dataHandler.GetAllItems<Note>(ModelType.Notes);

            foreach (var note in noteList)
            {
                if (note.Id == id)
                {
                    return note;
                }
            }

            return null;
        }

        public List<Note> GetAllNotes()
        {
            return _dataHandler.GetAllItems<Note>(ModelType.Notes);
        }

        public Note? DeleteNote(int id)
        {
            List<Note> noteList = _dataHandler.GetAllItems<Note>(ModelType.Notes);

            var note = GetNote(id);

            if (note != null)
            {
                noteList.Remove(note);
                _dataHandler.PostAllItems(noteList, ModelType.Notes);
                return note;
            }
            return null;
        }

        public Note? UpdateNote(Note note, int id)
        {
            if (NoteExists(id))
            {
                var targetNote = GetNote(id);

                if (targetNote != null)
                {
                    targetNote.Name = note.Name;
                    targetNote.Text = note.Text;
                    targetNote.Author = note.Author;

                }
            }

            return null;
        }

    }
}
