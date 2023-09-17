namespace Collibri.RoomModels;

public class RoomManager
{
    private readonly string _baseDirectory;
    private readonly List<Room> _rooms = new List<Room>();
    

    public RoomManager(string baseDirectory)
    {
        _baseDirectory = baseDirectory;
    }

    public void CreateRoom(string roomName)
    {
        string originalRoomName = roomName;
        int roomNumber = 1;

        while (true)
        {
            string roomDirectory = Path.Combine(_baseDirectory, roomName);

            if (!Directory.Exists(roomDirectory))
            {
                Directory.CreateDirectory(roomDirectory);
                _rooms.Add(new Room(roomName)); // Create and add the room to the list
                break; // Unique room name found, exit the loop
            }

            // If the room name already exists, add a number to it and try again
            roomName = $"{originalRoomName}_{roomNumber}";
            roomNumber++;
        }
    }

    public void DeleteRoom(string roomName)
    {
        string roomDirectory = Path.Combine(_baseDirectory, roomName);

        if (Directory.Exists(roomDirectory))
        {
            Directory.Delete(roomDirectory, true);
            _rooms.RemoveAll(room => room.Name == roomName);
        }
        else
        {
            Console.WriteLine($"Room '{roomName}' does not exist.");
        }
    }

    public List<Room> ListRooms()
    {
        return _rooms; // Return the list of rooms
    }

    public int GetRoomCount()
    {
        return _rooms.Count; // Return the count of rooms in the list
    }
}