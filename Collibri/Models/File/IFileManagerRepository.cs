namespace Collibri.Models.File; 

public interface IFileManagerRepository {
	FileManager? CreateFileManager(FileManager fileManager, string roomName, string sectionName);
}