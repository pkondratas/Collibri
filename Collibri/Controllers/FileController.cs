using Collibri.Models.Files;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Controllers;

[ApiController]
[Route("/v1/rooms/{roomName}/sections/{sectionName}")]
public class FileController : ControllerBase {
	private readonly IFileRepository _fileRepository;

	public FileController(IFileRepository fileRepository) {
		_fileRepository = fileRepository;
	}

	[HttpPost("")]
	public IActionResult CreateFile([FromForm] IFormFile file) {
		var result = _fileRepository.CreateFile(file);
		return result == null ? Conflict() : Ok(result);
	}
}