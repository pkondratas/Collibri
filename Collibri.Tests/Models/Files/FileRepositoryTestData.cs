using System.Collections;
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
            var path = HelperMethods.GetPath("123");
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { path + "\\textFile.txt", new MockFileData("Text file test data") },
                { path + "\\pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "\\pngFile.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) }
            });
            
            Add(fileSystem, HelperMethods.CreateTestFormFile("textFile1.txt", "Text file test data"),
                "123",
                new File(path + "\\textFile1.txt", 123));
            // Should return null
            Add(fileSystem, HelperMethods.CreateTestFormFile("textFile.txt", "Text file test data"),
                "123",
                null);
            // No extension
            Add(fileSystem, HelperMethods.CreateTestFormFile("textFile", "Text file test data"),
                "123",
                new File(path + "\\textFile", 123));
            Add(fileSystem, HelperMethods.CreateTestFormFile("pngFile2.png",
                    System.Text.Encoding.UTF8.GetString(new byte[] { 0x12, 0x34, 0x56, 0xd2 })),
                "123",
                new File(path + "\\pngFile2.png", 123));
        }
    }

    public class DeleteFileData : TheoryData<MockFileSystem, string, string, File?>
    {
        public DeleteFileData()
        {
            var path = HelperMethods.GetPath("321");
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
            var path = HelperMethods.GetPath("121");
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { path + "\\textFile.txt", new MockFileData("Text file test data") },
                { path + "\\pdfFile.pdf", new MockFileData("PDF file test data") },
                { path + "\\pngFile.png", new MockFileData(new byte[] { 0x12, 0x34, 0x56, 0xd2 }) },
                { path + "\\noExtension", new MockFileData("No extension file test data") }
            });
            Add(fileSystem, "textFile.txt", "121",
                HelperMethods.CreateTestFileStreamResult(fileSystem, path, "textFile.txt"));
            // Should return null
            Add(fileSystem, "noFile.txt", "121", null);
            Add(fileSystem, "noExtension", "121",
                HelperMethods.CreateTestFileStreamResult(fileSystem, path, "noExtension"));
            Add(fileSystem, "pngFile.png", "121",
                HelperMethods.CreateTestFileStreamResult(fileSystem, path, "pngFile.png"));
        }
    }
    
    public class UpdateFileNameData  : TheoryData<MockFileSystem, string, string, string, File?>
    {
        public UpdateFileNameData()
        {
            var path = HelperMethods.GetPath("212");
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
    
    static class HelperMethods
    {
        public static FileStreamResult CreateTestFileStreamResult(MockFileSystem fileSystem, string path, string fileName)
        {
            var fileStream = fileSystem.FileStream.New(path + "\\" + fileName, FileMode.Open, FileAccess.Read);
            return new FileStreamResult(fileStream, "application/octet-stream");
        }
        
        public static IFormFile CreateTestFormFile(string fileName, string content)
        {
            var stream = new MemoryStream();
            var writer = new StreamWriter(stream);
            writer.Write(content);
            writer.Flush();
            stream.Position = 0;

            return new FormFile(stream, 0, stream.Length, "file", fileName);
        }

        public static string GetPath(string postId)
        {
            return new DirectoryInfo($@"{Directory.GetParent(
                Directory.GetCurrentDirectory())}\Collibri\Data\Files\{postId}").FullName;
        }
        
        public static bool StreamEquals(Stream a, Stream b)
        {
            if (a == b)
            {
                return true;
            }
    
            if (a == null || b == null)
            {
                throw new ArgumentNullException(a == null ? "a" : "b");
            }

            if (a.Length != b.Length)
            {
                return false;
            }

            for (int i = 0; i < a.Length; i++)
            {
                int aByte = a.ReadByte();
                int bByte = b.ReadByte();
                if (aByte.CompareTo(bByte) != 0)
                {
                    return false;
                }
            }

            return true;
        }
    }
}