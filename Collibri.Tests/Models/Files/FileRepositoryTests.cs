using System.IO.Abstractions.TestingHelpers;
using Collibri.Models.Files;
using Microsoft.AspNetCore.Http;
using File = Collibri.Models.Files.File;

namespace Collibri.Tests.Models.Files
{
    public class FileRepositoryTests
    {
        [Theory]
        [ClassData(typeof(CreateFileData))]
        public void CreateFileShouldReturnFileTest(IFormFile fileData, string postId, File? expected)
        {
            // Arrange
            var path = new DirectoryInfo(
                $@"{Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data\Files\{postId}\").FullName;
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>
            {
                { path + "textFile.txt", new MockFileData("Text file test data") },
                { path + "pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "pngImage.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) }
            });
            var fileRepository = new FileRepository(fileSystem.FileSystem);

            // Act
            var actual = fileRepository.CreateFile(fileData, postId);
            
            // Assert
            if(expected == null)
                Assert.Null(actual);
            
            Assert.Equal(expected.PostId, actual.PostId);
            Assert.Equal(expected.Path, actual.Path);
            Assert.True(fileSystem.File.Exists(actual.Path));
        }
    }
}