using System.IO.Abstractions.TestingHelpers;
using Collibri.Dtos;
using Collibri.Models;
using Collibri.Tests.Repositories.Files;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Tests.Controllers
{
	public class CreateFileData : TheoryData<IFormFile, string, int, FileInfoDTO?>
    {
        public CreateFileData()
        {
            Add(FileTestHelper.CreateTestFormFile("textFile.txt", "Text file test data"),
                "00000000000000000000000000000000", 200,
                new FileInfoDTO(@"C:\Files\00000000000000000000000000000000\textFile.txt", 
                    Guid.Parse("00000000000000000000000000000000")));
            Add(FileTestHelper.CreateTestFormFile("textFile.txt", "Text file test data"),
                "00000000000000000000000000000000", 409, null);
        }
    }

    public class DeleteFileData : TheoryData<string, string, int, FileInfoDTO?>
    {
        public DeleteFileData()
        {
            Add("textFile.txt", "00000000000000000000000000000000", 200,
                new FileInfoDTO(@"C:\Files\00000000000000000000000000000000\textFile.txt", 
                Guid.Parse("00000000000000000000000000000000")));
            Add("textFile.txt", "00000000000000000000000000000000", 409, null);
        }
    }

    public class GetFileData : TheoryData<string, string, int, FileContentResult?>
    {
        public GetFileData()
        {
            var fileSystem = new MockFileSystem(new Dictionary<string, MockFileData>()
            {
                { @"C:\Files\00000000000000000000000000000000\textFile.txt",
                    new MockFileData("Text file test data") }
            });
            
            Add("textFile.txt", "00000000000000000000000000000000", 200,
                FileTestHelper.CreateTestFileContentResult(fileSystem,  @"C:\Files\00000000000000000000000000000000",
                    "textFile.txt"));
            Add("textFile.txt", "00000000000000000000000000000000", 409, null);
        }
    }
    
    public class UpdateFileNameData  : TheoryData<string, string, string, int, FileInfoDTO?>
    {
        public UpdateFileNameData()
        {
            Add("textFile.txt", "00000000000000000000000000000000", "updatedName.txt", 200,
                new FileInfoDTO(@"C:\Files\00000000000000000000000000000000\updatedName.txt", 
                    Guid.Parse("00000000000000000000000000000000")));
            Add("textFile.txt", "00000000000000000000000000000000", "updatedName.txt", 409, null);
        }
    }
}