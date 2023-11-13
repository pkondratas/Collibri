using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Collibri.Models
{
    public class Document
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; } = "";
        public string Text { get; set; } = "";
        public Guid PostId { get; set; }
        
        public virtual Post? Post { get; set; }
        
        public Document()
        {
            
        }
        
        public Document(int id, Guid postId, string title, string text)
        {
            Title = title;
            Id = id;
            PostId = postId;
            Text = text;
        }
    }
}