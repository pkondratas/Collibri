using Collibri.Models.File;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Controllers;

[ApiController]
[Route("/v1/rooms/{roomName}/sections/{sectionName}")]
public class FileController : ControllerBase {
	private readonly IFileManagerRepository _fileManagerRepository;

	public FileController(IFileManagerRepository fileManagerRepository) {
		_fileManagerRepository = fileManagerRepository;
	}

	[HttpPost("")]
	public IActionResult CreateFileManager([FromBody] FileManager fileManager, string roomName, string sectionName) {
		var result = _fileManagerRepository.CreateFileManager(fileManager, roomName, sectionName);
		return result == null ? Conflict() : Ok(result);
	}
}