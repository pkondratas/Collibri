using Collibri.Models;

namespace Collibri.Repositories
{
    public interface INoteRepository
    {
        public Note? CreateNote(Note note);
        public Note? GetNote(int id);
        public Note? DeleteNote(int id);
        public Note? UpdateNote(Note note, int id);
        public IEnumerable<Note> GetAllNotesByPost(Guid postId);
        // public IEnumerable<Note> GetAllNotesInRoom(int roomId);
    }
}
