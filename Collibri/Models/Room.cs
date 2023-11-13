using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Collibri.Models
{
    public class Room
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = "";
        
        public virtual ICollection<RoomMember>? RoomMembers { get; set; }
        public virtual ICollection<Section>? Sections { get; set; } 
        
        public Room()
        {
            
        }
        
        public Room(string name)
        {
            Name = name;
        }
    }
}

