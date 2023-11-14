using System.IO.Abstractions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Net.Http.Headers;
using File = Collibri.Models.File;

namespace Collibri.Repositories.FileBasedImplementation
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
			var path = GetPath(postId);
			var separator = _fileSystem.Path.DirectorySeparatorChar;
			
			if (!_fileSystem.Directory.Exists(path))
			{
				_fileSystem.Directory.CreateDirectory(path);
			}
		
			if (_fileSystem.File.Exists(path + separator + file.FileName))
			{
				return null;
			}

			using(var fileStream = _fileSystem.File.Create(path + separator + file.FileName))
			{
				file.CopyTo(fileStream);
			}
			return (File?) new File(path + separator + file.FileName, Guid.Parse(postId));
		}

		public File? DeleteFile(string fileName, string postId)
		{
			var path = GetPath(postId);
			var separator = _fileSystem.Path.DirectorySeparatorChar;
		
			if (!_fileSystem.File.Exists(path + separator + fileName))
			{
				return null;
			}
			_fileSystem.File.Delete(path + separator + fileName);
			
			return (File?) new File(path + separator + fileName, Guid.Parse(postId));
		}

		public FileContentResult? GetFile(string fileName, string postId)
		{
			var path = GetPath(postId);
			var separator = _fileSystem.Path.DirectorySeparatorChar;

			if (!_fileSystem.File.Exists(path + separator + fileName))
			{
				return null;
			}
			
			string? contentType;
			new FileExtensionContentTypeProvider().TryGetContentType(fileName, out contentType);
			var bytes = _fileSystem.File.ReadAllBytes(path + separator + fileName);
			return new FileContentResult(bytes, contentType ?? "application/octet-stream");
		}

		public File? UpdateFileName(string fileName, string postId, string updatedName)
		{
			var path = GetPath(postId);
			var separator = _fileSystem.Path.DirectorySeparatorChar;
		
			if (!_fileSystem.File.Exists(path + separator + fileName) || 
			    _fileSystem.File.Exists(path + separator + updatedName))
			{
				return null;
			}
			_fileSystem.File.Move(path + separator + fileName, path + separator + updatedName);
			return (File?) new File(path + separator + updatedName, Guid.Parse(postId));
		}

		private string GetPath(string postId)
		{
			return _fileSystem.DirectoryInfo.New(
					_fileSystem.Path.Combine(
						_fileSystem.Directory.GetParent(Directory.GetCurrentDirectory()).FullName, 
						"Collibri", "Data", "Files", postId))
				.FullName;
		}
	}
}