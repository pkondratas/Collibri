using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Collibri.Models
{
    public class Section : IEquatable<Section>
    {
        [Key]
        public int Id { get; set; }
        public int RoomId { get; set; }
        public string SectionName { get; set; } = "";
        
        public virtual Room? Room { get; set; }
        public virtual ICollection<Post>? Posts { get; set; }
        
        public Section()
        {
            
        }
        
        public Section(int sectionId, int roomId, string sectionName)
        {
            Id = sectionId;
            RoomId = roomId;
            SectionName = sectionName;
        }

        public bool Equals(Section? other)
        {
            if (other == null)
            {
                return false;
            }

            return this.RoomId.Equals(other.RoomId) && this.SectionName.Equals(other.SectionName);
        }
    }   
}