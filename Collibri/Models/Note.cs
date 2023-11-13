using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Collibri.Models
{
    public class Note
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = "";
        public string Text { get; set; } = "";
        public Guid PostId { get; set; }
        public string Author { get; set; } = "";
        public DateTime CreationDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }
        
        public virtual Post? Post { get; set; }
        
        public Note()
        {
            
        }
        
        public Note(Guid postId, string name, string text, string author, int id = 0)
        {
            this.Author = author;
            this.Name = name;
            this.Text = text;
            this.PostId = postId;
            this.Id = id;
        }
    }
}
