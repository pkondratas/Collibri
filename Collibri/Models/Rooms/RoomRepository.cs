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
            
            if (roomList.Any(existingRoom => existingRoom.Id == room.Id))
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

        public Room? UpdateRoom(int roomId, Room updatedRoom)
        {
            List<Room> roomList = _dataHandler.GetAllItems<Room>(ModelType.Rooms);
            Room existingRoom = roomList.FirstOrDefault(room => room.Id == roomId);

            if (existingRoom == null)
            {
                return null; 
            }

            existingRoom.Name = updatedRoom.Name;

            _dataHandler.PostAllItems(roomList, ModelType.Rooms);

            return existingRoom;
        }

        public bool DeleteRoom(int roomId)
        {
            List<Room> roomList = _dataHandler.GetAllItems<Room>(ModelType.Rooms);
            Room roomToRemove = roomList.FirstOrDefault(room => room.Id == roomId);

            if (roomToRemove == null)
            {
                return false; 
            }

            roomList.Remove(roomToRemove);
            
            _dataHandler.PostAllItems(roomList, ModelType.Rooms);

            return true;
        }
    }
}