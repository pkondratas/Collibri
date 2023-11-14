using Microsoft.EntityFrameworkCore;

namespace Collibri.Models
{
    [PrimaryKey(nameof(RoomId), nameof(AccountId))]
    public class RoomMember
    {
        public int RoomId { get; set; }
        public Guid AccountId { get; set; }
        
        public virtual Account Account { get; set; }
        public virtual Room Room { get; set; }

        public RoomMember()
        {
            
        }
    }
}
