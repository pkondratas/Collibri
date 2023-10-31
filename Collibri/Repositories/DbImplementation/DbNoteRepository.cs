using Collibri.Models;
using Collibri.Repositories.ExtensionMethods;

namespace Collibri.Repositories.DbImplementation
{
    public class DbNoteRepository : INoteRepository
    {
        private readonly DataContext _context;
        
        public DbNoteRepository(DataContext dataContext)
        {
            _context = dataContext;
        }
    
        public Note? CreateNote(Note note)
        {
            List<Note> noteList = _context.Notes.ToList();
            
            if (noteList.Any(notes => notes.Name.Equals(note.Name)))
            {
                return null;
            }
            
            note.Id = new int().GenerateNewId(noteList.Select(x => x.Id).ToList());
            note.CreationDate = DateTime.Now;
            note.LastUpdatedDate = note.CreationDate;

            _context.Notes.Add(note);
            _context.SaveChanges();

            return note;
        }

        public Note? GetNote(int id)
        {
            var noteList = _context.Notes.ToList();

            return noteList.Any(x => x.Id == id) ? noteList.FirstOrDefault(x => x.Id == id) : null;
        }

        public Note? DeleteNote(int id)
        {
            var noteList = _context.Notes.ToList();
            
            foreach (var note in noteList)
            {
                if (note.Id != id)
                    continue;
                _context.Notes.Remove(note);
                _context.SaveChanges();

                return note;
            }

            return null;
        }

        public Note? UpdateNote(Note note, int id)
        {
            var noteList = _context.Notes.ToList();
            var targetNote = noteList.FirstOrDefault(notes => notes.Id == id);

            if (targetNote == null)
                return null;
        
            targetNote.Name = note.Name; 
            targetNote.Text = note.Text;
            targetNote.LastUpdatedDate = DateTime.Now;

            _context.Notes.Update(targetNote);
            _context.SaveChanges();
        
            return targetNote;

        }
    }
}