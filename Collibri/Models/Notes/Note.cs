namespace Collibri.Models.Notes
{
    public class Note
    {
        public string Name { get; set; }
        public string Text { get; set; }
        public string Author { get; set; }
        public int SectionId { get; set; }
        public int RoomId { get; set; }
        public int Id { get; set; }

        public Note(int sectionId, int roomId, string name, string text, string author)
        {
            this.Name = name;
            this.Text = text;
            this.Author = author;
            this.SectionId = sectionId;
            this.RoomId = roomId;
        }
    }
}
