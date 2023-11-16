using Collibri.Dtos;
using Collibri.Models;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Repositories
{
    public interface IFileRepository
    {
        FileInfoDTO? CreateFile(IFormFile file, string postId);
        FileInfoDTO? DeleteFile(string fileName, string postId);
        FileContentResult? GetFile(string fileName, string postId);
        FileInfoDTO? UpdateFileName(string fileName, string postId, string updatedName);
    }
}