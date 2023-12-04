using Collibri.Dtos;

namespace Collibri.Repositories
{
    public interface IRoomMemberRepository
    {
        public RoomMemberDTO? CreateRoomMember(int invitationCode, RoomMemberDTO newMember);
    }   
}