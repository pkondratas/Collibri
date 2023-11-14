using AutoMapper;
using Collibri.Data;
using Collibri.Dtos;
using Collibri.Models;
using Collibri.Repositories.ExtensionMethods;

namespace Collibri.Repositories.DbImplementation
{
    public class DbRoomRepository : IRoomRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        
        public DbRoomRepository(DataContext dataContext, IMapper mapper)
        {
            _context = dataContext;
            _mapper = mapper;
        }
    
        public RoomDTO? CreateRoom(RoomDTO room)
        {
            room.Id = new int().GenerateNewId(_context.Rooms.Select(x => x.Id).ToList());
            _context.Rooms.Add(_mapper.Map<Room>(room));
            _context.SaveChanges();
            return room;
        }

        public List<RoomDTO> GetAllRooms()
        {
            return _mapper.Map<List<RoomDTO>>(_context.Rooms.ToList());
        }

        public RoomDTO? UpdateRoom(int roomId, RoomDTO updatedRoom)
        {
            var roomToUpdate = _context.Rooms.FirstOrDefault(room => room.Id == roomId);

            if (roomToUpdate == null)
            {
                return null; 
            }

            roomToUpdate.Name = updatedRoom.Name;

            _context.Rooms.Update(roomToUpdate);
            _context.SaveChanges();

            return _mapper.Map<RoomDTO>(roomToUpdate);
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