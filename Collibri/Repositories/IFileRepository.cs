using Microsoft.AspNetCore.Mvc;
using File = Collibri.Models.File;

namespace Collibri.Repositories
{
    public interface IFileRepository
    {
        File? CreateFile(IFormFile file, string postId);
        File? DeleteFile(string fileName, string postId);
        FileContentResult? GetFile(string fileName, string postId);
        File? UpdateFileName(string fileName, string postId, string updatedName);
    }
}