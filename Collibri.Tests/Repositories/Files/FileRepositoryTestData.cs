using System.IO.Abstractions.TestingHelpers;
using Collibri.Dtos;
using Collibri.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Tests.Repositories.Files
{
    public class CreateFileData : TheoryData<MockFileSystem, IFormFile, string, FileInfoDTO?>
    {
        public CreateFileData()
        {
            var postId = "00000000000000000000000000000000";
            var path = FileTestHelper.GetPath(postId);
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { path + "\\textFile.txt", new MockFileData("Text file test data") },
                { path + "\\pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "\\pngFile.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) }
            });
            
            Add(fileSystem, FileTestHelper.CreateTestFormFile("textFile1.txt", "Text file test data"), postId,
                new FileInfoDTO(Guid.Parse("00000000000000000000000000000000"),
                    Guid.Parse(postId),
                    @"C:\Files\00000000000000000000000000000000\textFile.txt",
                    "textFile.txt", "text/plain", 1));
            // Should return null
            Add(fileSystem, FileTestHelper.CreateTestFormFile("textFile.txt", "Text file test data"), postId,
                null);
            // No extension
            Add(fileSystem, FileTestHelper.CreateTestFormFile("textFile", "Text file test data"), postId,
                new FileInfoDTO(Guid.Parse("00000000000000000000000000000000"),
                    Guid.Parse(postId),
                    @"C:\Files\00000000000000000000000000000000\textFile.txt",
                    "textFile.txt", "text/plain", 1));
            Add(fileSystem, FileTestHelper.CreateTestFormFile("pngFile2.png",
                    System.Text.Encoding.UTF8.GetString(new byte[] { 0x12, 0x34, 0x56, 0xd2 })), postId,
                new FileInfoDTO(Guid.Parse("00000000000000000000000000000000"),
                    Guid.Parse(postId),
                    @"C:\Files\00000000000000000000000000000000\textFile.txt",
                    "textFile.txt", "text/plain", 1));
        }
    }

    public class DeleteFileData : TheoryData<MockFileSystem, string, string, FileInfoDTO?>
    {
        public DeleteFileData()
        {
            var postId = "00000000000000000000000000000001";
            var path = FileTestHelper.GetPath(postId);
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { path + "\\textFile.txt", new MockFileData("Text file test data") },
                { path + "\\pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "\\pngFile.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) },
                { path + "\\noExtension", new MockFileData("No extension file test data") }
            });
            Add(fileSystem, "textFile.txt", postId, new FileInfoDTO(Guid.Parse("00000000000000000000000000000000"),
                Guid.Parse(postId),
                @"C:\Files\00000000000000000000000000000000\textFile.txt",
                "textFile.txt", "text/plain", 1));
            // Should return null
            Add(fileSystem, "noFile.txt", postId, null);
            // No extension
            Add(fileSystem, "noExtension", postId, new FileInfoDTO(Guid.Parse("00000000000000000000000000000000"),
                Guid.Parse(postId),
                @"C:\Files\00000000000000000000000000000000\textFile.txt",
                "textFile.txt", "text/plain", 1));
        }
    }

    public class GetFileData : TheoryData<MockFileSystem, string, string, FileStreamResult?>
    {
        public GetFileData()
        {
            var postId = "00000000000000000000000000000002";
            var path = FileTestHelper.GetPath(postId);
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { path + "\\textFile.txt", new MockFileData("Text file test data") },
                { path + "\\pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "\\pngFile.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) },
                { path + "\\noExtension", new MockFileData("No extension file test data") }
            });
            Add(fileSystem, "textFile.txt", postId,
                FileTestHelper.CreateTestFileStreamResult(fileSystem, path, "textFile.txt"));
            // Should return null
            Add(fileSystem, "noFile.txt", postId, null);
            Add(fileSystem, "noExtension", postId,
                FileTestHelper.CreateTestFileStreamResult(fileSystem, path, "noExtension"));
            Add(fileSystem, "pngFile.png", postId,
                FileTestHelper.CreateTestFileStreamResult(fileSystem, path, "pngFile.png"));
        }
    }
    
    public class UpdateFileNameData  : TheoryData<MockFileSystem, string, string, string, FileInfoDTO?>
    {
        public UpdateFileNameData()
        {
            var postId = "00000000000000000000000000000003";
            var path = FileTestHelper.GetPath(postId);
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { path + "\\textFile.txt", new MockFileData("Text file test data") },
                { path + "\\pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "\\pngFile.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) },
                { path + "\\noExtension", new MockFileData("No extension file test data") }
            });
            Add(fileSystem, "textFile.txt", postId, "anotherTextFile.txt",
                new FileInfoDTO(Guid.Parse("00000000000000000000000000000000"),
                    Guid.Parse(postId),
                    @"C:\Files\00000000000000000000000000000000\textFile.txt",
                    "textFile.txt", "text/plain", 1));
            // Should return null
            Add(fileSystem, "noFile.txt", postId, "anotherTextFile.txt", null);
        }
    }
}