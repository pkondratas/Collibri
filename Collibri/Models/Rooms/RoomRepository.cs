using Collibri.Models.DataHandling;

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
            int newId = GenerateUniqueId(roomList);
            
            room.Id = newId;
            roomList.Add(room);
            _dataHandler.PostAllItems(roomList, ModelType.Rooms);

            return room;
        }

        private int GenerateUniqueId(List<Room> roomList)
        {
            int maxId = roomList.Count > 0 ? roomList.Max(room => room.Id) : 0;
            return maxId + 1;
        }

        public List<Room> GetAllRooms()
        {
            return _dataHandler.GetAllItems<Room>(ModelType.Rooms);
        }

        public Room? UpdateRoom(int roomId, Room updatedRoom)
        {
            List<Room> roomList = _dataHandler.GetAllItems<Room>(ModelType.Rooms);
            Room? existingRoom = roomList.FirstOrDefault(room => room.Id == roomId);

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
            Room? roomToRemove = roomList.FirstOrDefault(room => room.Id == roomId);

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