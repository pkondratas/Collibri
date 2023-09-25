namespace Collibri.Models.Notes
{
    public interface INoteRepository
    {
        public Note? CreateNote(Note note);
        public Note? GetNote(int id);
        public List<Note> GetAllNotes();
        public Note? DeleteNote(int id);
    }
}
