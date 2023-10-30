using Collibri.Models;

namespace Collibri.Tests.Controllers
{
    public class RoomControllerTestData
    {
        public static Room ValidRoom => new Room(){Id = 1, Name = "TestRoom"};

        public static Room ExistingRoom => new Room(){Id = 2, Name = "TestRoom"};

        public static List<Room> RoomsExist => new List<Room>
        {
            new Room(){Id = 3, Name = "Room1"},
            new Room(){Id = 4, Name = "Room2"}
        };

        public static int ExistingRoomId => 1;

        public static int NonExistentRoomId => 3;

        public static Room UpdatedRoom => new Room(){Id = 5, Name = "UpdatedRoom"};
    }
}