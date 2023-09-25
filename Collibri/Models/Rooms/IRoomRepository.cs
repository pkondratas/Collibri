namespace Collibri.RoomModels;

public interface IRoomRepository
{
    public Room? CreateRoom(Room room);
    public List<Room> GetAllRooms();
    public Room? UpdateRoom(string roomName, Room updatedRoom);
    public bool DeleteRoom(string roomName);
}
