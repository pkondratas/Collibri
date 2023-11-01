namespace Collibri.Models
{
    public class Room
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";
        
        public Room()
        {
            
        }
        
        public Room(string name)
        {
            Name = name;
        }
    }
}

