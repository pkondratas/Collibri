using Microsoft.AspNetCore.Mvc;
using File = Collibri.Models.File;

namespace Collibri.Repositories
{
	public interface IFileRepository
	{
		File? CreateFile(IFormFile file, string sectionId);
		File? DeleteFile(string fileName, string sectionId);
		FileStreamResult GetFile(string fileName, string sectionId);
		File? UpdateFileName(string fileName, string sectionId, string updatedName);
	}
}