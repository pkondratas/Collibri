using Collibri.Data;
using Collibri.Models;
using Collibri.Repositories.ExtensionMethods;

namespace Collibri.Repositories.DbImplementation
{
    public class DbRoomRepository : IRoomRepository
    {
        private readonly DataContext _context;
        
        public DbRoomRepository(DataContext dataContext)
        {
            _context = dataContext;
        }
    
        public Room? CreateRoom(Room room)
        {
            room.Id = new int().GenerateNewId(_context.Rooms.Select(x => x.Id).ToList());
            _context.Rooms.Add(room);
            _context.SaveChanges();
            return room;
        }

        public List<Room> GetAllRooms()
        {
            return _context.Rooms.ToList();
        }

        public Room? UpdateRoom(int roomId, Room updatedRoom)
        {
            var roomToUpdate = _context.Rooms.FirstOrDefault(room => room.Id == roomId);

            if (roomToUpdate == null)
            {
                return null; 
            }

            roomToUpdate.Name = updatedRoom.Name;

            _context.Rooms.Update(roomToUpdate);
            _context.SaveChanges();

            return roomToUpdate;
        }

        public bool DeleteRoom(int roomId)
        {
            var roomToRemove = _context.Rooms.FirstOrDefault(room => room.Id == roomId);
        
            if (roomToRemove == null)
                return false;
        
            _context.Rooms.Remove(roomToRemove);
            _context.SaveChanges();

            return true;
        }
    }
}