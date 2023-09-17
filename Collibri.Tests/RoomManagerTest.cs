using Collibri.RoomModels;

namespace Collibri.Tests;

 public class RoomManagerTests : IDisposable
    {
        private readonly string _testBaseDirectory;
        private readonly RoomManager _roomManager;

        public RoomManagerTests()
        {
            _testBaseDirectory = Path.Combine(Environment.CurrentDirectory, "TestRooms");
            Directory.CreateDirectory(_testBaseDirectory);
            _roomManager = new RoomManager(_testBaseDirectory);
        }

        [Fact]
        public void CreateRoom_ShouldCreateRoomDirectory()
        {
            // Arrange
            string roomName = "TestRoom";

            // Act
            _roomManager.CreateRoom(roomName);

            // Assert
            Assert.True(Directory.Exists(Path.Combine(_testBaseDirectory, roomName)));
        }

        [Fact]
        public void DeleteRoom_ShouldDeleteRoomDirectory()
        {
            // Arrange
            string roomName = "TestRoom";
            _roomManager.CreateRoom(roomName);

            // Act
            _roomManager.DeleteRoom(roomName);

            // Assert
            Assert.False(Directory.Exists(Path.Combine(_testBaseDirectory, roomName)));
        }

        [Fact]
        public void ListRooms_ShouldReturnListOfRooms()
        {
            // Arrange
            string roomName1 = "TestRoom1";
            string roomName2 = "TestRoom2";
            _roomManager.CreateRoom(roomName1);
            _roomManager.CreateRoom(roomName2);

            // Act
            List<Room> rooms = _roomManager.ListRooms();

            // Assert
            Assert.Contains(rooms, room => room.Name == roomName1);
            Assert.Contains(rooms, room => room.Name == roomName2);
        }

        [Fact]
        public void GetRoomCount_ShouldReturnCorrectRoomCount()
        {
            // Arrange
            string roomName1 = "TestRoom1";
            string roomName2 = "TestRoom2";
            _roomManager.CreateRoom(roomName1);
            _roomManager.CreateRoom(roomName2);

            // Act
            int roomCount = _roomManager.GetRoomCount();

            // Assert
            Assert.Equal(2, roomCount);
        }

        public void Dispose()
        {
            Directory.Delete(_testBaseDirectory, true);
        }
    }