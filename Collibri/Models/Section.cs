using System.ComponentModel.DataAnnotations;

namespace Collibri.Models
{
    public class Section
    {
        [Key]
        public int Id { get; set; }
        public int RoomId { get; set; }
        public string SectionName { get; set; } = "";
        
        public virtual Room Room { get; set; }
        public virtual ICollection<Post> Posts { get; set; }
        
        public Section()
        {
            
        }
    }   
}