using Collibri.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Controllers
{
	[ApiController]
	[Route("/v1/files")]
	public class FileController : ControllerBase
	{
		private readonly IFileRepository _fileRepository;

		public FileController(IFileRepository fileRepository)
		{
			_fileRepository = fileRepository;
		}

		[HttpPost("{sectionId}")]
		public IActionResult CreateFile([FromForm] IFormFile file, string sectionId)
		{
			var result = _fileRepository.CreateFile(file, sectionId);
			return result == null ? Conflict("File with this name already exists") : Ok(result);
		}

		[HttpDelete("{sectionId}/{fileName}")]
		public IActionResult DeleteFile(string fileName, string sectionId)
		{
			var result = _fileRepository.DeleteFile(fileName, sectionId);
			return result == null ? Conflict("File does not exist") : Ok(result);
		}
	
		[HttpGet("{sectionId}/{fileName}")]
		public IActionResult GetFile(string fileName, string sectionId)
		{
			var result = _fileRepository.GetFile(fileName, sectionId);
			return result;
		}

		[HttpPut("{sectionId}/{fileName}/{updatedName}")]
		public IActionResult UpdateFileName(string fileName, string sectionId, string updatedName)
		{
			var result = _fileRepository.UpdateFileName(fileName, sectionId, updatedName);
			return result == null ? Conflict("File does not exist") : Ok(result);
		}
	}
}