using System.Text.Json;

namespace Collibri.Models.Files;

public class FileRepository : IFileRepository
{
	public File? CreateFile(IFormFile fileStream)
	{
		var path = new DirectoryInfo(
			$@"{Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data\Files.json").FullName;

		var file =  (File?) new File(fileStream);

		var jsonString = JsonSerializer.Serialize(file);
		System.IO.File.WriteAllText(path, jsonString);

		return file;
	}
}