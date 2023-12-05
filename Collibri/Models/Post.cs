using System.ComponentModel.DataAnnotations;

namespace Collibri.Models
{
    public class Post
    {
        [Key]
        public Guid Id { get; set; }
        public string CreatorUsername { get; set; } = "";
        public string Title { get; set; } = "";
        public int SectionId { get; set; }
        public int LikeCount { get; set; }
        public int DislikeCount { get; set; }
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }
        
        public virtual Section Section { get; set; }
        public virtual ICollection<Note> Notes { get; set; }
        public virtual ICollection<Document> Documents { get; set; }
        public virtual ICollection<PostTags> PostTags { get; set; }

        public Post()
        {
            
        }
    }
}

