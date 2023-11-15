using Collibri.Dtos;

namespace Collibri.Tests.Repositories.Rooms
{
    public class RoomRepositoryTestData
    {
        public static RoomDTO ValidRoom => new RoomDTO("Test RoomDTO");

        public static RoomDTO ExistingRoom => new RoomDTO("Existing RoomDTO");

        public static List<RoomDTO> RoomsExist => new List<RoomDTO>
        {
            new RoomDTO("RoomDTO 1"),
            new RoomDTO("RoomDTO 2")
        };

        public static int ExistingRoomId => 1;

        public static int NonExistentRoomId => 3;

        public static RoomDTO UpdatedRoom => new RoomDTO("Updated RoomDTO");
    }
}
