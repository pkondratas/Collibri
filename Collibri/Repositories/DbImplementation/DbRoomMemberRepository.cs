using AutoMapper;
using Collibri.Data;
using Collibri.Dtos;
using Collibri.Models;

namespace Collibri.Repositories.DbImplementation
{
    public class DbRoomMemberRepository : IRoomMemberRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        
        public DbRoomMemberRepository(DataContext dataContext, IMapper mapper)
        {
            _context = dataContext;
            _mapper = mapper;
        }
        
        public RoomMemberDTO? CreateRoomMember(int invitationCode, RoomMemberDTO newMember)
        {
            if (_context.Rooms.Any(x => x.InvitationCode == invitationCode && x.Id == newMember.RoomId))
            {
                return null;
            }
            if (_context.RoomMembers.Any(x => x.RoomId == newMember.RoomId && x.Username == newMember.Username))
            {
                return null;
            }

            _context.RoomMembers.Add(_mapper.Map<RoomMember>(newMember));
            _context.SaveChanges();

            return newMember;
        }
    }   
}