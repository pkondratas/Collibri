using Collibri.Models.Rooms;

namespace Collibri.Tests.Controllers
{
    public class RoomControllerTestData
    {
        public static Room ValidRoom => new Room("TestRoom");

        public static Room ExistingRoom => new Room("TestRoom");

        public static List<Room> RoomsExist => new List<Room>
        {
            new Room("Room1"),
            new Room("Room2")
        };

        public static int ExistingRoomId => 1;

        public static int NonExistentRoomId => 3;

        public static Room UpdatedRoom => new Room("UpdatedRoom");
    }
}