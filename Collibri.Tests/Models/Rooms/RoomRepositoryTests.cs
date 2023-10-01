using Collibri.Models.DataHandling;
using Collibri.Models.Rooms;

namespace Collibri.Tests.Models.Rooms
{
    public class RoomRepositoryTests
    {        
        [Fact]
        public void CreateRoom_Should_AddRoomToList()
        {
            // Arrange
            var dataHandlerMock = new Mock<IDataHandler>();
            var repository = new RoomRepository(dataHandlerMock.Object);
            var room = RoomRepositoryTestData.ValidRoom;

            // Act
            var createdRoom = repository.CreateRoom(room);

            // Assert
            Assert.NotNull(createdRoom);
            Assert.Equal(room.Id, createdRoom.Id);
            Assert.Equal(room.Name, createdRoom.Name);
        }

        [Fact]
        public void UpdateRoom_Should_UpdateExistingRoom()
        {
            // Arrange
            var dataHandlerMock = new Mock<IDataHandler>();
            var repository = new RoomRepository(dataHandlerMock.Object);
            var existingRoom = RoomRepositoryTestData.ExistingRoom;
            dataHandlerMock.Setup(handler => handler.GetAllItems<Room>(ModelType.Rooms))
                .Returns(RoomRepositoryTestData.RoomsExist);

            // Act
            var updatedRoom = RoomRepositoryTestData.UpdatedRoom;
            var result = repository.UpdateRoom(existingRoom.Id, updatedRoom);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(updatedRoom.Id, result.Id);
            Assert.Equal(updatedRoom.Name, result.Name);
        }
        
        [Fact]
        public void DeleteRoom_Should_RemoveExistingRoomFromList_And_CallDataHandlerPostAllItems()
        {
            // Arrange
            var dataHandlerMock = new Mock<IDataHandler>();
            RoomRepositoryTestData.ExistingRoom.Id = 1;
            var roomList = new List<Room> { RoomRepositoryTestData.ExistingRoom };
            dataHandlerMock.Setup(handler => handler.GetAllItems<Room>(ModelType.Rooms))
                .Returns(roomList);

            var repository = new RoomRepository(dataHandlerMock.Object);

            // Act
            var result = repository.DeleteRoom(RoomRepositoryTestData.ExistingRoom.Id);

            // Assert
            Assert.True(result);

            // Additional verification
            var deletedRoom = roomList.Find(room => room.Id == RoomRepositoryTestData.ExistingRoomId);
            Assert.Null(deletedRoom); // Ensure the room with the specified ID is no longer in the room list

            // Verify that PostAllItems method of IDataHandler was called with the updated roomList
            dataHandlerMock.Verify(handler => handler.PostAllItems(roomList, ModelType.Rooms), Times.Once);
        }



        [Fact]
        public void DeleteRoom_Should_NotRemoveNonExistentRoomFromList()
        {
            // Arrange
            var dataHandlerMock = new Mock<IDataHandler>();
            var repository = new RoomRepository(dataHandlerMock.Object);
            dataHandlerMock.Setup(handler => handler.GetAllItems<Room>(ModelType.Rooms))
                .Returns(RoomRepositoryTestData.RoomsExist);

            // Act
            var result = repository.DeleteRoom(RoomRepositoryTestData.NonExistentRoomId);

            // Assert
            Assert.False(result);
        }
        
        [Fact]
        public void GetAllRooms_Should_ReturnListOfRooms()
        {
            // Arrange
            var expectedRooms = RoomRepositoryTestData.RoomsExist; // Your expected list of rooms from test data
            var dataHandlerMock = new Mock<IDataHandler>();
            dataHandlerMock.Setup(handler => handler.GetAllItems<Room>(ModelType.Rooms))
                .Returns(expectedRooms);

            var repository = new RoomRepository(dataHandlerMock.Object);

            // Act
            var actualRooms = repository.GetAllRooms();

            // Assert
            Assert.NotNull(actualRooms);
            Assert.Equal(expectedRooms.Count, actualRooms.Count);

            for (int i = 0; i < expectedRooms.Count; i++)
            {
                Assert.Equal(expectedRooms[i].Id, actualRooms[i].Id);
                Assert.Equal(expectedRooms[i].Name, actualRooms[i].Name);
                // Add more property comparisons if there are additional properties in your Room class
            }
        }
    }
}
