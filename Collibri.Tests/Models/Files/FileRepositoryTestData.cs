using System.IO.Abstractions.TestingHelpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using File = Collibri.Models.Files.File;

namespace Collibri.Tests.Models.Files
{
    public class CreateFileData : TheoryData<MockFileSystem, IFormFile, string, File?>
    {
        public CreateFileData()
        {
            var path = FileTestHelper.GetPath("00000000000000000000000000000000");
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { path + "\\textFile.txt", new MockFileData("Text file test data") },
                { path + "\\pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "\\pngFile.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) }
            });
            
            Add(fileSystem, FileTestHelper.CreateTestFormFile("textFile1.txt", "Text file test data"),
                "00000000000000000000000000000000",
                new File(path + "\\textFile1.txt", Guid.Parse("00000000000000000000000000000000")));
            // Should return null
            Add(fileSystem, FileTestHelper.CreateTestFormFile("textFile.txt", "Text file test data"),
                "00000000000000000000000000000000",
                null);
            // No extension
            Add(fileSystem, FileTestHelper.CreateTestFormFile("textFile", "Text file test data"),
                "00000000000000000000000000000000",
                new File(path + "\\textFile", Guid.Parse("00000000000000000000000000000000")));
            Add(fileSystem, FileTestHelper.CreateTestFormFile("pngFile2.png",
                    System.Text.Encoding.UTF8.GetString(new byte[] { 0x12, 0x34, 0x56, 0xd2 })),
                "00000000000000000000000000000000",
                new File(path + "\\pngFile2.png", Guid.Parse("00000000000000000000000000000000")));
        }
    }

    public class DeleteFileData : TheoryData<MockFileSystem, string, string, File?>
    {
        public DeleteFileData()
        {
            var path = FileTestHelper.GetPath("00000000000000000000000000000001");
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { path + "\\textFile.txt", new MockFileData("Text file test data") },
                { path + "\\pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "\\pngFile.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) },
                { path + "\\noExtension", new MockFileData("No extension file test data") }
            });
            Add(fileSystem, "textFile.txt", "00000000000000000000000000000001",
                new File(path + "\\textFile.txt", Guid.Parse("00000000000000000000000000000001")));
            // Should return null
            Add(fileSystem, "noFile.txt", "00000000000000000000000000000001", null);
            // No extension
            Add(fileSystem, "noExtension", "00000000000000000000000000000001",
                new File(path + "\\noExtension", Guid.Parse("00000000000000000000000000000001")));
        }
    }

    public class GetFileData : TheoryData<MockFileSystem, string, string, FileStreamResult?>
    {
        public GetFileData()
        {
            var path = FileTestHelper.GetPath("00000000000000000000000000000002");
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { path + "\\textFile.txt", new MockFileData("Text file test data") },
                { path + "\\pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "\\pngFile.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) },
                { path + "\\noExtension", new MockFileData("No extension file test data") }
            });
            Add(fileSystem, "textFile.txt", "00000000000000000000000000000002",
                FileTestHelper.CreateTestFileStreamResult(fileSystem, path, "textFile.txt"));
            // Should return null
            Add(fileSystem, "noFile.txt", "00000000000000000000000000000002", null);
            Add(fileSystem, "noExtension", "00000000000000000000000000000002",
                FileTestHelper.CreateTestFileStreamResult(fileSystem, path, "noExtension"));
            Add(fileSystem, "pngFile.png", "00000000000000000000000000000002",
                FileTestHelper.CreateTestFileStreamResult(fileSystem, path, "pngFile.png"));
        }
    }
    
    public class UpdateFileNameData  : TheoryData<MockFileSystem, string, string, string, File?>
    {
        public UpdateFileNameData()
        {
            var path = FileTestHelper.GetPath("00000000000000000000000000000003");
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { path + "\\textFile.txt", new MockFileData("Text file test data") },
                { path + "\\pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "\\pngFile.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) },
                { path + "\\noExtension", new MockFileData("No extension file test data") }
            });
            Add(fileSystem, "textFile.txt", "00000000000000000000000000000003", "anotherTextFile.txt",
                new File(path + "\\anotherTextFile.txt", Guid.Parse("00000000000000000000000000000003")));
            // Should return null
            Add(fileSystem, "noFile.txt", "00000000000000000000000000000003", "anotherTextFile.txt", null);
        }
    }
}