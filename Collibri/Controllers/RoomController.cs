using Collibri.Models.Rooms;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Controllers
{
    [Route("/v1/rooms")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly IRoomRepository _roomRepository;

        public RoomController(IRoomRepository roomRepository)
        {
            _roomRepository = roomRepository;
        }

        [HttpPost("")]
        public IActionResult CreateRoom([FromBody] Room room)
        {
            var result = _roomRepository.CreateRoom(room);
            return result == null ? Conflict() : Ok(result);
        }

        [HttpGet("")]
        public IActionResult GetAllRooms()
        {
            List<Room> rooms = _roomRepository.GetAllRooms();
            return rooms.Count == 0 ? NoContent() : Ok(rooms);
        }

        [HttpPut("{roomId}")]
        public IActionResult UpdateRoom(int roomId, [FromBody] Room updatedRoom)
        {
            var result = _roomRepository.UpdateRoom(roomId, updatedRoom);
    
            return result == null ? NotFound() : Ok(result);
        }

        [HttpDelete("{roomId}")]
        public IActionResult DeleteRoom(int roomId)
        {
            var deleted = _roomRepository.DeleteRoom(roomId);
            return deleted ? NoContent() : NotFound();
        }
    }
}

