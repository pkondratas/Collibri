using System.IO.Abstractions.TestingHelpers;
using Collibri.Tests.Repositories.Files;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using File = Collibri.Models.File;

namespace Collibri.Tests.Controllers
{
	public class CreateFileData : TheoryData<IFormFile, string, int, File?>
    {
        public CreateFileData()
        {
            Add(FileTestHelper.CreateTestFormFile("textFile.txt", "Text file test data"),
                "00000000000000000000000000000000", 200,
                new File(@"C:\Files\00000000000000000000000000000000\textFile.txt", 
                    Guid.Parse("00000000000000000000000000000000")));
            Add(FileTestHelper.CreateTestFormFile("textFile.txt", "Text file test data"),
                "00000000000000000000000000000000", 409, null);
        }
    }

    public class DeleteFileData : TheoryData<string, string, int, File?>
    {
        public DeleteFileData()
        {
            Add("textFile.txt", "00000000000000000000000000000000", 200,
                new File(@"C:\Files\00000000000000000000000000000000\textFile.txt", 
                Guid.Parse("00000000000000000000000000000000")));
            Add("textFile.txt", "00000000000000000000000000000000", 409, null);
        }
    }

    public class GetFileData : TheoryData<string, string, int, FileStreamResult?>
    {
        public GetFileData()
        {
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { @"C:\Files\00000000000000000000000000000000\textFile.txt",
                    new MockFileData("Text file test data") }
            });
            
            Add("textFile.txt", "00000000000000000000000000000000", 200,
                FileTestHelper.CreateTestFileStreamResult(fileSystem,  @"C:\Files\00000000000000000000000000000000",
                    "textFile.txt"));
            Add("textFile.txt", "00000000000000000000000000000000", 409, null);
        }
    }
    
    public class UpdateFileNameData  : TheoryData<string, string, string, int, File?>
    {
        public UpdateFileNameData()
        {
            Add("textFile.txt", "00000000000000000000000000000000", "updatedName.txt", 200,
                new File(@"C:\Files\00000000000000000000000000000000\updatedName.txt", 
                    Guid.Parse("00000000000000000000000000000000")));
            Add("textFile.txt", "00000000000000000000000000000000", "updatedName.txt", 409, null);
        }
    }
}