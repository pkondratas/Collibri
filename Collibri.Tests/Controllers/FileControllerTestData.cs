using System.IO.Abstractions.TestingHelpers;
using Collibri.Tests.Models.Files;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using File = Collibri.Models.Files.File;

namespace Collibri.Tests.Controllers
{
	public class CreateFileData : TheoryData<IFormFile, string, int, File?>
    {
        public CreateFileData()
        {
            Add(FileTestHelper.CreateTestFormFile("textFile.txt", "Text file test data"), "123", 200,
                new File(@"C:\Files\123\textFile.txt", 123));
            Add(FileTestHelper.CreateTestFormFile("textFile.txt", "Text file test data"), "123", 409, null);
        }
    }

    public class DeleteFileData : TheoryData<string, string, int, File?>
    {
        public DeleteFileData()
        {
            Add("textFile.txt", "123", 200, new File(@"C:\Files\123\textFile.txt", 123));
            Add("textFile.txt", "123", 409, null);
        }
    }

    public class GetFileData : TheoryData<string, string, int, FileStreamResult?>
    {
        public GetFileData()
        {
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { @"C:\Files\123\textFile.txt", new MockFileData("Text file test data") }
            });
            
            Add("textFile.txt", "123", 200,
                FileTestHelper.CreateTestFileStreamResult(fileSystem,  @"C:\Files\123", "textFile.txt"));
            Add("textFile.txt", "123", 409, null);
        }
    }
    
    public class UpdateFileNameData  : TheoryData<string, string, string, int, File?>
    {
        public UpdateFileNameData()
        {
            Add("textFile.txt", "123", "updatedName.txt", 200, new File(@"C:\Files\123\updatedName.txt", 123));
            Add("textFile.txt", "123", "updatedName.txt", 409, null);
        }
    }
}