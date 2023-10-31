using Collibri.Models;

namespace Collibri.Tests.Repositories.Rooms
{
    public class RoomRepositoryTestData
    {
        public static Room ValidRoom => new Room("Test Room");

        public static Room ExistingRoom => new Room("Existing Room");

        public static List<Room> RoomsExist => new List<Room>
        {
            new Room("Room 1"),
            new Room("Room 2")
        };

        public static int ExistingRoomId => 1;

        public static int NonExistentRoomId => 3;

        public static Room UpdatedRoom => new Room("Updated Room");
    }
}
