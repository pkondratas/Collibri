namespace Collibri.Models
{
    public class Note
    {
        public string Name { get; set; }
        public string Text { get; set; }
        public string Author { get; set; }
        public int SectionId { get; set; }
        public int RoomId { get; set; }
        public Guid PostId { get; set; }
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }
        
        public Note(int sectionId, int roomId, Guid postId, string name, string text, string author, int id = 0)
        {
            this.Name = name;
            this.Text = text;
            this.Author = author;
            this.SectionId = sectionId;
            this.RoomId = roomId;
            this.PostId = postId;
            this.Id = id;
        }
    }
}
