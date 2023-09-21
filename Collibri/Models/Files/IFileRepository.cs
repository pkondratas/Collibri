namespace Collibri.Models.Files; 

public interface IFileRepository {
	File? CreateFile(IFormFile file);
}