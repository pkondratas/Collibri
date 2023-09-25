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

        var roomToCreate = new Room("TestRoom");
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

        var existingRoom  = new Room("TestRoom");;
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

        var rooms = new List<Room> { new Room("Room1"), new Room("Room2") };
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

        var existingRoomName = "ExistingRoom";
        var updatedRoom = new Room("UpdatedRoom");
        var existingRoom = new Room(existingRoomName);

        mockRepo.Setup(repo => repo.UpdateRoom(existingRoomName, updatedRoom)).Returns(existingRoom);

        // Act
        var result = roomController.UpdateRoom(existingRoomName, updatedRoom) as OkObjectResult;

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

        var nonExistentRoomName = "NonExistentRoom";
        var updatedRoom = new Room ("UpdatedRoom");

        mockRepo.Setup(repo => repo.UpdateRoom(nonExistentRoomName, updatedRoom)).Returns((Room)null);

        // Act
        var result = roomController.UpdateRoom(nonExistentRoomName, updatedRoom) as NotFoundResult;

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

        var existingRoomName = "ExistingRoom";

        mockRepo.Setup(repo => repo.DeleteRoom(existingRoomName)).Returns(true);

        // Act
        var result = roomController.DeleteRoom(existingRoomName) as NoContentResult;

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

        var nonExistentRoomName = "NonExistentRoom";

        mockRepo.Setup(repo => repo.DeleteRoom(nonExistentRoomName)).Returns(false);

        // Act
        var result = roomController.DeleteRoom(nonExistentRoomName) as NotFoundResult;

        // Assert
        Assert.NotNull(result);
        Assert.Equal(404, result.StatusCode); // Not Found
    }
}