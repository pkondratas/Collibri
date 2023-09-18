namespace Collibri.Models.File; 

public class FileManagerRepository : IFileManagerRepository {
	private readonly DirectoryInfo _fileManagerDirectory 
		= new DirectoryInfo($@"{Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data");

	public FileManager? CreateFileManager(FileManager fileManager, string roomName, string sectionName) {
		var path = $@"{_fileManagerDirectory.FullName}\{roomName}\{sectionName}\Files";
		var result = (FileManager?) fileManager;
		try {
			if (!Directory.Exists(path))
				Directory.CreateDirectory(path);
			else
				result = null;
		}
		catch (Exception e) {
			Console.WriteLine("Error creating FileManager directory: " + e.Message);
		}

		return result;
	}
}