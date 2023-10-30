using Collibri.Models;
using Collibri.Repositories.DataHandling;
using Collibri.Repositories.ExtensionMethods;

namespace Collibri.Repositories.FileBasedImplementation
{
    public class FbNoteRepository : INoteRepository
    {
        private readonly IDataHandler _dataHandler;

        public FbNoteRepository(IDataHandler dataHandler)
        {
            this._dataHandler = dataHandler;
        }

        public Note? CreateNote(Note note)
        {
            List<Note> noteList = _dataHandler.GetAllItems<Note>(ModelType.Notes);
            
            foreach (var notes in noteList)
            {
                if (notes.Name.Equals(note.Name))
                {
                    return null;
                }
            }
            
            note.Id = new int().GenerateNewId(noteList.Select(x => x.Id).ToList());
            note.CreationDate = DateTime.Now;
            note.LastUpdatedDate = note.CreationDate;
            noteList.Add(note);
            
            _dataHandler.PostAllItems(noteList, ModelType.Notes);
            
            return note;
        }

        public Note? GetNote(int id)
        {
            List<Note> noteList = _dataHandler.GetAllItems<Note>(ModelType.Notes);

            if (noteList.Any(x => x.Id == id))
            {
                return noteList.FirstOrDefault(x => x.Id == id);
            }

            return null;
        }

        // public IEnumerable<Note> GetAllNotesInSection(int sectionId)
        // {
        //     var noteList = _dataHandler.GetAllItems<Note>(ModelType.Notes);
        //     var notesInSection = noteList.Where(note => note.SectionId == sectionId);
        //     
        //     return notesInSection;
        // }
        //
        // public IEnumerable<Note> GetAllNotesInRoom(int roomId)
        // {
        //     var noteList = _dataHandler.GetAllItems<Note>(ModelType.Notes);
        //     var notesInSection = noteList.Where(note => note.RoomId == roomId);
        //     
        //     return notesInSection;
        // }

        public Note? DeleteNote(int id)
        {
            List<Note> noteList = _dataHandler.GetAllItems<Note>(ModelType.Notes);
            
            foreach (var note in noteList)
            {
                if (note.Id == id)
                {
                    noteList.Remove(note);
                    _dataHandler.PostAllItems(noteList, ModelType.Notes);
                    return note;
                }
            }

            return null;
        }

        public Note? UpdateNote(Note note, int id)
        {
            List<Note> noteList = _dataHandler.GetAllItems<Note>(ModelType.Notes);
            var targetNote = noteList.FirstOrDefault(notes => notes.Id == id);

            if (targetNote != null)
            { 
                targetNote.Name = note.Name; 
                targetNote.Text = note.Text;
                targetNote.LastUpdatedDate = DateTime.Now;

                _dataHandler.PostAllItems(noteList, ModelType.Notes); 
                return targetNote;
            }

            return null;
        }

    }
}
