using Microsoft.AspNetCore.Mvc;
using Collibri.RoomModels;

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

            if (rooms.Count == 0)
            {
                return NoContent(); // Return 204 No Content if there are no rooms.
            }

            return Ok(rooms);
        }
        
        [HttpPut("{roomName}")]
        public IActionResult UpdateRoom(string roomName, [FromBody] Room updatedRoom)
        {
            var result = _roomRepository.UpdateRoom(roomName, updatedRoom);

            if (result == null)
            {
                return NotFound(); // Return 404 Not Found if the room with the given name doesn't exist.
            }

            return Ok(result);
        }
        
        [HttpDelete("{roomName}")]
        public IActionResult DeleteRoom(string roomName)
        {
            var deleted = _roomRepository.DeleteRoom(roomName);

            if (!deleted)
            {
                return NotFound(); // Return 404 Not Found if the room with the given name doesn't exist.
            }

            return NoContent(); // Return 204 No Content to indicate successful deletion.
        }
    }
}
