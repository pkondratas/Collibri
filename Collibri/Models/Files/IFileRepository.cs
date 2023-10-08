using Microsoft.AspNetCore.Mvc;

namespace Collibri.Models.Files
{
	public interface IFileRepository
	{
		File? CreateFile(IFormFile file, string postId);
		File? DeleteFile(string fileName, string postId);
		FileStreamResult? GetFile(string fileName, string postId);
		File? UpdateFileName(string fileName, string postId, string updatedName);
	}
}