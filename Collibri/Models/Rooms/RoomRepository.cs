using Collibri.Models.DataHandling;
using Collibri.RoomModels;

namespace Collibri.Models.Rooms
{
    public class RoomRepository : IRoomRepository
    {
        private readonly IDataHandler _dataHandler;

        public RoomRepository(IDataHandler dataHandler)
        {
            _dataHandler = dataHandler;
        }
        public Room? CreateRoom(Room room)
        {
            List<Room> roomList = _dataHandler.GetAllItems<Room>(ModelType.Rooms);

            if (roomList.Any(existingRoom => existingRoom.Name.Equals(room.Name)))
            {
                return null;
            }

            roomList.Add(room);
            _dataHandler.PostAllItems(roomList, ModelType.Rooms);
    
            return room;
        }
        
        public List<Room> GetAllRooms()
        {
            return _dataHandler.GetAllItems<Room>(ModelType.Rooms);
        }
        
        public Room? UpdateRoom(string roomName, Room updatedRoom)
        {
            List<Room> roomList = _dataHandler.GetAllItems<Room>(ModelType.Rooms);
            Room existingRoom = roomList.FirstOrDefault(room => room.Name.Equals(roomName, StringComparison.OrdinalIgnoreCase));

            if (existingRoom == null)
            {
                return null; 
            }

            existingRoom.Name = updatedRoom.Name;

            _dataHandler.PostAllItems(roomList, ModelType.Rooms);

            return existingRoom;
        }
        
        public bool DeleteRoom(string roomName)
        {
            List<Room> roomList = _dataHandler.GetAllItems<Room>(ModelType.Rooms);
            Room roomToRemove = roomList.FirstOrDefault(room => room.Name.Equals(roomName, StringComparison.OrdinalIgnoreCase));

            if (roomToRemove == null)
            {
                return false; // Room with the given name not found.
            }

            roomList.Remove(roomToRemove);

            // Save the updated list of rooms without the deleted room
            _dataHandler.PostAllItems(roomList, ModelType.Rooms);

            return true;
        }
    }
}