namespace Collibri.Models.Files; 

public class FileRepository : IFileRepository {
	
	public File? CreateFile(IFormFile file) {
		var path = new DirectoryInfo(
			$@"{Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data\Files\").FullName;

		return (File?) new File(path, file);;
	}
}