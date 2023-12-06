using System.IO.Abstractions.TestingHelpers;
using Collibri.Dtos;
using Collibri.Repositories.DbImplementation;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Tests.Repositories.Files
{
    public class FileRepositoryTests
    {
        [Theory]
        [ClassData(typeof(CreateFileData))]
        public void CreateFile_Should_ReturnFileTest(MockFileSystem fileSystem, IFormFile fileData,
            string postId, FileInfoDTO? expected)
        {
            // Arrange
            var fileRepository = new DbFileRepository(fileSystem.FileSystem);

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
            string postId, FileInfoDTO? expected)
        {
            // Arrange
            var fileRepository = new FbFileRepository(fileSystem.FileSystem);
            
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
            string postId, FileContentResult? expected)
        {
            // Arrange
            var fileRepository = new FbFileRepository(fileSystem.FileSystem);
            
            // Act
            var actual = fileRepository.GetFile(fileName, postId);
            
            // Assert
            if(expected == null)
                Assert.Null(actual);
            else
            {
                Assert.True(actual.FileContents.SequenceEqual(expected.FileContents));
            }
        }

        [Theory]
        [ClassData(typeof(UpdateFileNameData))]
        public void UpdateFileName_Should_ReturnFileTest(MockFileSystem fileSystem, string fileName, string postId,
            string updatedName, FileInfoDTO? expected)
        {
            // Arrange
            var path = FileTestHelper.GetPath(postId);
            var fileRepository = new FbFileRepository(fileSystem.FileSystem);
            
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