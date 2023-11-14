namespace Collibri.Dtos
{
    public class RoomDTO
    {
        public int Id { get; set; }
        public string Name { get; set; } = "";

        public RoomDTO()
        {
            
        }
        
        public RoomDTO(string name)
        {
            Name = name;
        }
    }
}