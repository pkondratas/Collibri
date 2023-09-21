namespace Collibri.Models.Sections
{
    public class Section
    {
        // public List<Document>? DocumentList { get; set; }
        // public List<Note>? NoteList { get; set; }
        // public List<File>? FileList { get; set; } 
        public Section(int sectionId, int roomId, string sectionName)
        {
            SectionId = sectionId;
            RoomId = roomId;
            SectionName = sectionName;
        }

        public int SectionId { get; set; }

        public int RoomId { get; set; }

        public string SectionName { get; set; }
    }   
}