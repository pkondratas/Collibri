using Microsoft.AspNetCore.Mvc;

namespace Collibri.Models.Files;

public class FileRepository : IFileRepository
{
	public File? CreateFile(IFormFile file, string sectionId)
	{
		var path = new DirectoryInfo(
			$@"{Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data\Files\{sectionId}\").FullName;

		if (!Directory.Exists(path))
		{
			Directory.CreateDirectory(path);
		}
		
		if (System.IO.File.Exists(path + file.FileName))
		{
			return null;
		}

		var fileStream = System.IO.File.Create(path + file.FileName);
		file.CopyTo(fileStream);
		fileStream.Close();

		return (File?)new File(path + file.FileName, int.Parse(sectionId));
	}

	public File? DeleteFile(string fileName, string sectionId)
	{
		var path = new DirectoryInfo(
			$@"{Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data\Files\{sectionId}\").FullName;
		
		if (!System.IO.File.Exists(path + fileName))
		{
			return null;
		}
		System.IO.File.Delete(path + fileName);
		
		return (File?)new File(path + fileName, int.Parse(sectionId));
	}

	public FileStreamResult GetFile(string fileName, string sectionId)
	{
		var path = new DirectoryInfo(
			$@"{Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data\Files\{sectionId}\").FullName;

		var fileStream = new FileStream(path + fileName, FileMode.Open, FileAccess.Read);
		return new FileStreamResult(fileStream, "application/octet-stream");
	}

	public File? UpdateFileName(string fileName, string sectionId, string updatedName)
	{
		var path = new DirectoryInfo(
			$@"{Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data\Files\{sectionId}\").FullName;
		
		if (!System.IO.File.Exists(path + fileName) || System.IO.File.Exists(path + updatedName))
		{
			return null;
		}
		System.IO.File.Move(path + fileName, path + updatedName);
		return (File?)new File(path + updatedName, int.Parse(sectionId));
	}
}