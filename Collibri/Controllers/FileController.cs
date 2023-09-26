using Collibri.Models.Files;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Controllers;

[ApiController]
[Route("/v1/{roomName}/{sectionId}")]
public class FileController : ControllerBase
{
	private readonly IFileRepository _fileRepository;

	public FileController(IFileRepository fileRepository)
	{
		_fileRepository = fileRepository;
	}

	[HttpPost("")]
	public IActionResult CreateFile([FromForm] IFormFile file, string sectionId)
	{
		var result = _fileRepository.CreateFile(file, sectionId);
		return result == null ? Conflict("File with this name already exists") : Ok(result);
	}

	[HttpDelete("{fileName}")]
	public IActionResult DeleteFile(string fileName, string sectionId)
	{
		var result = _fileRepository.DeleteFile(fileName, sectionId);
		return result == null ? Conflict("File does not exist") : Ok(result);
	}
	
	[HttpGet("{fileName}")]
	public IActionResult GetFile(string fileName, string sectionId)
	{
		var result = _fileRepository.GetFile(fileName, sectionId);
		return result;
	}
}