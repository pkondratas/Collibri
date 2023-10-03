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
            var path = FileTestHelper.GetPath("123");
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { path + "\\textFile.txt", new MockFileData("Text file test data") },
                { path + "\\pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "\\pngFile.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) }
            });
            
            Add(fileSystem, FileTestHelper.CreateTestFormFile("textFile1.txt", "Text file test data"),
                "123",
                new File(path + "\\textFile1.txt", 123));
            // Should return null
            Add(fileSystem, FileTestHelper.CreateTestFormFile("textFile.txt", "Text file test data"),
                "123",
                null);
            // No extension
            Add(fileSystem, FileTestHelper.CreateTestFormFile("textFile", "Text file test data"),
                "123",
                new File(path + "\\textFile", 123));
            Add(fileSystem, FileTestHelper.CreateTestFormFile("pngFile2.png",
                    System.Text.Encoding.UTF8.GetString(new byte[] { 0x12, 0x34, 0x56, 0xd2 })),
                "123",
                new File(path + "\\pngFile2.png", 123));
        }
    }

    public class DeleteFileData : TheoryData<MockFileSystem, string, string, File?>
    {
        public DeleteFileData()
        {
            var path = FileTestHelper.GetPath("321");
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { path + "\\textFile.txt", new MockFileData("Text file test data") },
                { path + "\\pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "\\pngFile.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) },
                { path + "\\noExtension", new MockFileData("No extension file test data") }
            });
            Add(fileSystem, "textFile.txt", "321", new File(path + "\\textFile.txt", 321));
            // Should return null
            Add(fileSystem, "noFile.txt", "321", null);
            // No extension
            Add(fileSystem, "noExtension", "321", new File(path + "\\noExtension", 321));
        }
    }

    public class GetFileData : TheoryData<MockFileSystem, string, string, FileStreamResult?>
    {
        public GetFileData()
        {
            var path = FileTestHelper.GetPath("121");
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { path + "\\textFile.txt", new MockFileData("Text file test data") },
                { path + "\\pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "\\pngFile.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) },
                { path + "\\noExtension", new MockFileData("No extension file test data") }
            });
            Add(fileSystem, "textFile.txt", "121",
                FileTestHelper.CreateTestFileStreamResult(fileSystem, path, "textFile.txt"));
            // Should return null
            Add(fileSystem, "noFile.txt", "121", null);
            Add(fileSystem, "noExtension", "121",
                FileTestHelper.CreateTestFileStreamResult(fileSystem, path, "noExtension"));
            Add(fileSystem, "pngFile.png", "121",
                FileTestHelper.CreateTestFileStreamResult(fileSystem, path, "pngFile.png"));
        }
    }
    
    public class UpdateFileNameData  : TheoryData<MockFileSystem, string, string, string, File?>
    {
        public UpdateFileNameData()
        {
            var path = FileTestHelper.GetPath("212");
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { path + "\\textFile.txt", new MockFileData("Text file test data") },
                { path + "\\pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "\\pngFile.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) },
                { path + "\\noExtension", new MockFileData("No extension file test data") }
            });
            Add(fileSystem, "textFile.txt", "212", "anotherTextFile.txt",
                new File(path + "\\anotherTextFile.txt", 212));
            // Should return null
            Add(fileSystem, "noFile.txt", "212", "anotherTextFile.txt", null);
        }
    }
}