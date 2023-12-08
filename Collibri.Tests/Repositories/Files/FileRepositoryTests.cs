// using System.IO.Abstractions.TestingHelpers;
// using Collibri.Dtos;
// using Collibri.Repositories.DbImplementation;
// using Microsoft.AspNetCore.Http;
// using Microsoft.AspNetCore.Mvc;
//
// namespace Collibri.Tests.Repositories.Files
// {
//     public class FileRepositoryTests
//     {
//         [Theory]
//         [ClassData(typeof(CreateFileData))]
//         public void CreateFile_Should_ReturnFileTest(MockFileSystem fileSystem, IFormFile fileData,
//             string postId, FileInfoDTO? expected)
//         {
//             // Arrange
//             var fileRepository = new DbFileRepository(fileSystem.FileSystem);
//
//             // Act
//             var actual = fileRepository.CreateFile(fileData, postId);
//             
//             // Assert
//             if(expected == null)
//                 Assert.Null(actual);
//             else
//             {
//                 Assert.Equivalent(expected, actual);
//                 Assert.True(fileSystem.File.Exists(expected.Path));
//             }
//         }
//
//         [Theory]
//         [ClassData(typeof(DeleteFileData))]
//         public void DeleteFile_Should_ReturnFileTest(MockFileSystem fileSystem, string id, FileInfoDTO? expected)
//         {
//             // Arrange
//             var fileRepository = new DbFileRepository(fileSystem.FileSystem);
//             
//             // Act
//             var actual = fileRepository.DeleteFile(id);
//             
//             // Assert
//             if(expected == null)
//                 Assert.Null(actual);
//             else
//             {
//                 Assert.Equivalent(expected, actual);
//                 Assert.True(!fileSystem.FileExists(expected.Path));
//             }
//         }
//
//         [Theory]
//         [ClassData(typeof(GetFileData))]
//         public void GetFile_Should_ReturnFileStreamResultTest(MockFileSystem fileSystem, string id, FileStreamResult? expected)
//         {
//             // Arrange
//             var fileRepository = new DbFileRepository(fileSystem.FileSystem);
//             
//             // Act
//             var actual = fileRepository.GetFile(id);
//             
//             // Assert
//             if(expected == null)
//                 Assert.Null(actual);
//             else
//             {
//                 Assert.True(FileTestHelper.StreamEquals(expected.FileStream, actual.FileStream));
//             }
//         }
//
//         [Theory]
//         [ClassData(typeof(UpdateFileNameData))]
//         public void UpdateFileName_Should_ReturnFileTest(MockFileSystem fileSystem, string id,
//             string updatedName, FileInfoDTO? expected)
//         {
//             // Arrange
//             //var path = FileTestHelper.GetPath(postId);
//             var fileRepository = new DbFileRepository(fileSystem.FileSystem);
//             
//             // Act
//             var actual = fileRepository.UpdateFileName(id,  updatedName);
//             
//             // Assert
//             if(expected == null)
//                 Assert.Null(actual);
//             else
//             {
//                 Assert.Equivalent(expected, actual);
//                 Assert.True(!fileSystem.FileExists(actual.Path));
//                 Assert.True(fileSystem.FileExists(expected.Path));
//             }
//         }
//     }
// }