using System.IO.Abstractions.TestingHelpers;
using Collibri.Models.Files;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using File = Collibri.Models.Files.File;

namespace Collibri.Tests.Models.Files
{
    public class FileRepositoryTests
    {
        [Theory]
        [ClassData(typeof(CreateFileData))]
        public void CreateFile_Should_ReturnFileTest(MockFileSystem fileSystem, IFormFile fileData,
            string postId, File? expected)
        {
            // Arrange
            var fileRepository = new FileRepository(fileSystem.FileSystem);

            // Act
            var actual = fileRepository.CreateFile(fileData, postId);
            
            // Assert
            if(expected == null)
                Assert.Null(actual);
            else
            {
                Assert.Equivalent(expected, actual);
                Assert.True(fileSystem.File.Exists(expected.Path));
            }
        }

        [Theory]
        [ClassData(typeof(DeleteFileData))]
        public void DeleteFile_Should_ReturnFileTest(MockFileSystem fileSystem, string fileName,
            string postId, File? expected)
        {
            // Arrange
            var fileRepository = new FileRepository(fileSystem.FileSystem);
            
            // Act
            var actual = fileRepository.DeleteFile(fileName, postId);
            
            // Assert
            if(expected == null)
                Assert.Null(actual);
            else
            {
                Assert.Equivalent(expected, actual);
                Assert.True(!fileSystem.FileExists(expected.Path));
            }
        }

        [Theory]
        [ClassData(typeof(GetFileData))]
        public void GetFile_Should_ReturnFileStreamResultTest(MockFileSystem fileSystem, string fileName,
            string postId, FileStreamResult? expected)
        {
            // Arrange
            var fileRepository = new FileRepository(fileSystem.FileSystem);
            
            // Act
            var actual = fileRepository.GetFile(fileName, postId);
            
            // Assert
            if(expected == null)
                Assert.Null(actual);
            else
            {
                Assert.True(FileTestHelper.StreamEquals(expected.FileStream, actual.FileStream));
            }
        }

        [Theory]
        [ClassData(typeof(UpdateFileNameData))]
        public void UpdateFileName_Should_ReturnFileTest(MockFileSystem fileSystem, string fileName, string postId,
            string updatedName, File? expected)
        {
            // Arrange
            var path = new DirectoryInfo(
                $@"{Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data\Files\{postId}\").FullName;
            var fileRepository = new FileRepository(fileSystem.FileSystem);
            
            // Act
            var actual = fileRepository.UpdateFileName(fileName, postId, updatedName);
            
            // Assert
            if(expected == null)
                Assert.Null(actual);
            else
            {
                Assert.Equivalent(expected, actual);
                Assert.True(!fileSystem.FileExists(path + fileName));
                Assert.True(fileSystem.FileExists(expected.Path));
            }
        }
    }
}