namespace Collibri.Models.Rooms
{
    public class Room
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Room(string name)
        {
            Name = name;
        }
    }
}

