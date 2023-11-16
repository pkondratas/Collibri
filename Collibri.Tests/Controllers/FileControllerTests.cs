using Collibri.Controllers;
using Collibri.Dtos;
using Collibri.Models;
using Collibri.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Tests.Controllers
{
	public class FileControllerTests
	{
		[Theory]
		[ClassData(typeof(CreateFileData))]
		public void CreateFile_Should_ReturnFileTest(IFormFile fileData, string postId, int statusCode, FileInfoDTO? expected)
		{
			// Arrange
			var repository = new Mock<IFileRepository>();
			var controller = new FileController(repository.Object);
			repository.Setup(x => x.CreateFile(fileData, postId)).Returns(expected);

			// Act
			var actual = controller.CreateFile(fileData, postId);
			
			// Assert
			if (expected == null)
			{
				Assert.IsType<ConflictObjectResult>(actual);
				Assert.Equal(statusCode, ((ConflictObjectResult) actual).StatusCode);
			}
			else
			{
				Assert.IsType<OkObjectResult>(actual);
				Assert.Equal(statusCode, ((OkObjectResult) actual).StatusCode);
			}
		}

		[Theory]
		[ClassData(typeof(DeleteFileData))]
		public void DeleteFile_Should_ReturnFileTest(string fileName, string postId, int statusCode, FileInfoDTO? expected)
		{
			// Arrange
			var repository = new Mock<IFileRepository>();
			var controller = new FileController(repository.Object);
			repository.Setup(x => x.DeleteFile(fileName, postId)).Returns(expected);

			// Act
			var actual = controller.DeleteFile(fileName, postId);
			
			// Assert
			if (expected == null)
			{
				Assert.IsType<ConflictObjectResult>(actual);
				Assert.Equal(statusCode, ((ConflictObjectResult) actual).StatusCode);
			}
			else
			{
				Assert.IsType<OkObjectResult>(actual);
				Assert.Equal(statusCode, ((OkObjectResult) actual).StatusCode);
			}
		}
		
		[Theory]
		[ClassData(typeof(GetFileData))]
		public void GetFile_Should_ReturnFileStreamResultTest(string fileName,
			string postId, int statusCode, FileContentResult? expected)
		{
			// Arrange
			var repository = new Mock<IFileRepository>();
			var controller = new FileController(repository.Object);
			repository.Setup(x => x.GetFile(fileName, postId)).Returns(expected);

			// Act
			var actual = controller.GetFile(fileName, postId);
			
			// Assert
			if (expected == null)
			{
				Assert.IsType<ConflictObjectResult>(actual);
				Assert.Equal(statusCode, ((ConflictObjectResult) actual).StatusCode);
			}
			else
			{
				Assert.IsType<OkObjectResult>(actual);
				Assert.Equal(statusCode, ((OkObjectResult) actual).StatusCode);
			}
		}

		[Theory]
		[ClassData(typeof(UpdateFileNameData))]
		public void UpdateFileName_Should_ReturnFileTest(string fileName, string postId,
			string updatedName, int statusCode, FileInfoDTO? expected)
		{
			// Arrange
			var repository = new Mock<IFileRepository>();
			var controller = new FileController(repository.Object);
			repository.Setup(x => x.UpdateFileName(fileName, postId, updatedName))
				.Returns(expected);

			// Act
			var actual = controller.UpdateFileName(fileName, postId, updatedName);
			
			// Assert
			if (expected == null)
			{
				Assert.IsType<ConflictObjectResult>(actual);
				Assert.Equal(statusCode, ((ConflictObjectResult) actual).StatusCode);
			}
			else
			{
				Assert.IsType<OkObjectResult>(actual);
				Assert.Equal(statusCode, ((OkObjectResult) actual).StatusCode);
			}
		}
	}
}