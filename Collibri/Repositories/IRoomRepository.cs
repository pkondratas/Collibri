using Collibri.Dtos;

namespace Collibri.Repositories
{
    public interface IRoomRepository
    {
        public RoomDTO? CreateRoom(RoomDTO room);
        public List<RoomDTO> GetAllRooms();
        public RoomDTO? UpdateRoom(int roomId, RoomDTO updatedRoom);
        public bool DeleteRoom(int roomId);
    }
}

