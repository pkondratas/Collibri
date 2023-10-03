using System.IO.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Models.Files
{
	public class FileRepository : IFileRepository
	{
		private readonly IFileSystem _fileSystem;
		public FileRepository(IFileSystem fileSystem)
		{
			_fileSystem = fileSystem;
		}
		
		public File? CreateFile(IFormFile file, string postId)
		{
			var path = _fileSystem.DirectoryInfo.New(
				$@"{_fileSystem.Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data\Files\{postId}").FullName;

			if (!_fileSystem.Directory.Exists(path))
			{
				_fileSystem.Directory.CreateDirectory(path);
			}
		
			if (_fileSystem.File.Exists(path + "\\" + file.FileName))
			{
				return null;
			}

			using (var fileStream = _fileSystem.File.Create(path + "\\" + file.FileName))
			{
				file.CopyTo(fileStream);
			}
			return (File?) new File(path + "\\" + file.FileName, int.Parse(postId));
		}

		public File? DeleteFile(string fileName, string postId)
		{
			var path = _fileSystem.DirectoryInfo.New(
				$@"{_fileSystem.Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data\Files\{postId}").FullName;
		
			if (!_fileSystem.File.Exists(path + "\\" + fileName))
			{
				return null;
			}
			_fileSystem.File.Delete(path + "\\" + fileName);
			
			return (File?) new File(path + "\\" + fileName, int.Parse(postId));
		}

		public FileStreamResult? GetFile(string fileName, string postId)
		{
			var path = _fileSystem.DirectoryInfo.New(
				$@"{_fileSystem.Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data\Files\{postId}").FullName;

			if (!_fileSystem.File.Exists(path + "\\" + fileName))
			{
				return null;
			}

			var fileStream = _fileSystem.FileStream.New(path + "\\" + fileName, FileMode.Open, FileAccess.Read);
			return new FileStreamResult(fileStream, "application/octet-stream");
		}

		public File? UpdateFileName(string fileName, string postId, string updatedName)
		{
			var path = _fileSystem.DirectoryInfo.New(
				$@"{_fileSystem.Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data\Files\{postId}").FullName;
		
			if (!_fileSystem.File.Exists(path + "\\" + fileName) || _fileSystem.File.Exists(path + "\\" + updatedName))
			{
				return null;
			}
			_fileSystem.File.Move(path + "\\" + fileName, path + "\\" + updatedName);
			return (File?) new File(path + "\\" + updatedName, int.Parse(postId));
		}
	}
}