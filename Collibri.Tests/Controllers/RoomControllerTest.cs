using Collibri.Controllers;
using Collibri.RoomModels;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Tests.Controllers;
public class RoomControllerTests
{
    // Helper method to create a RoomController with a mock repository
    private RoomController CreateRoomController(Mock<IRoomRepository> mockRepo)
    {
        return new RoomController(mockRepo.Object);
    }

    [Fact]
    public void CreateRoom_ValidRoom_ReturnsOkResult()
    {
        // Arrange
        var mockRepo = new Mock<IRoomRepository>();
        var roomController = CreateRoomController(mockRepo);

        var roomToCreate = new Room(1, "TestRoom");
        mockRepo.Setup(repo => repo.CreateRoom(roomToCreate)).Returns(roomToCreate);

        // Act
        var result = roomController.CreateRoom(roomToCreate) as OkObjectResult;

        // Assert
        Assert.NotNull(result);
        Assert.Equal(200, result.StatusCode);
        Assert.Equal(roomToCreate, result.Value);
    }

    [Fact]
    public void CreateRoom_DuplicateRoom_ReturnsConflictResult()
    {
        // Arrange
        var mockRepo = new Mock<IRoomRepository>();
        var roomController = CreateRoomController(mockRepo);

        var existingRoom = new Room(2, "TestRoom");
        mockRepo.Setup(repo => repo.CreateRoom(existingRoom)).Returns((Room)null);

        // Act
        var result = roomController.CreateRoom(existingRoom) as StatusCodeResult;

        // Assert
        Assert.NotNull(result);
        Assert.Equal(409, result.StatusCode); // Conflict
    }

    [Fact]
    public void GetAllRooms_RoomsExist_ReturnsOkResult()
    {
        // Arrange
        var mockRepo = new Mock<IRoomRepository>();
        var roomController = CreateRoomController(mockRepo);

        var rooms = new List<Room> { new Room (1, "Room1"), new Room (2, "Room2") };
        mockRepo.Setup(repo => repo.GetAllRooms()).Returns(rooms);

        // Act
        var result = roomController.GetAllRooms() as OkObjectResult;

        // Assert
        Assert.NotNull(result);
        Assert.Equal(200, result.StatusCode);
        Assert.Equal(rooms, result.Value);
    }

    [Fact]
    public void UpdateRoom_ExistingRoom_ReturnsOkResult()
    {
        // Arrange
        var mockRepo = new Mock<IRoomRepository>();
        var roomController = CreateRoomController(mockRepo);

        var existingRoomId = 1;
        var updatedRoom = new Room (existingRoomId, "UpdatedRoom");
        var existingRoom = new Room (existingRoomId, "ExistingRoom");

        mockRepo.Setup(repo => repo.UpdateRoom(existingRoomId, updatedRoom)).Returns(existingRoom);

        // Act
        var result = roomController.UpdateRoom(existingRoomId, updatedRoom) as OkObjectResult;

        // Assert
        Assert.NotNull(result);
        Assert.Equal(200, result.StatusCode);
        Assert.Equal(existingRoom, result.Value);
    }

    [Fact]
    public void UpdateRoom_NonExistentRoom_ReturnsNotFoundResult()
    {
        // Arrange
        var mockRepo = new Mock<IRoomRepository>();
        var roomController = CreateRoomController(mockRepo);

        var nonExistentRoomId = 3;
        var updatedRoom = new Room (nonExistentRoomId, "UpdatedRoom");;

        mockRepo.Setup(repo => repo.UpdateRoom(nonExistentRoomId, updatedRoom)).Returns((Room)null);

        // Act
        var result = roomController.UpdateRoom(nonExistentRoomId, updatedRoom) as NotFoundResult;

        // Assert
        Assert.NotNull(result);
        Assert.Equal(404, result.StatusCode); // Not Found
    }

    [Fact]
    public void DeleteRoom_ExistingRoom_ReturnsNoContentResult()
    {
        // Arrange
        var mockRepo = new Mock<IRoomRepository>();
        var roomController = CreateRoomController(mockRepo);

        var existingRoomId = 1;

        mockRepo.Setup(repo => repo.DeleteRoom(existingRoomId)).Returns(true);

        // Act
        var result = roomController.DeleteRoom(existingRoomId) as NoContentResult;

        // Assert
        Assert.NotNull(result);
        Assert.Equal(204, result.StatusCode); // No Content
    }

    [Fact]
    public void DeleteRoom_NonExistentRoom_ReturnsNotFoundResult()
    {
        // Arrange
        var mockRepo = new Mock<IRoomRepository>();
        var roomController = CreateRoomController(mockRepo);

        var nonExistentRoomId = 3;

        mockRepo.Setup(repo => repo.DeleteRoom(nonExistentRoomId)).Returns(false);

        // Act
        var result = roomController.DeleteRoom(nonExistentRoomId) as NotFoundResult;

        // Assert
        Assert.NotNull(result);
        Assert.Equal(404, result.StatusCode); // Not Found
    }
}