namespace Collibri;

/// <summary>
/// A class for managing section's files.
/// Creates new directory on instantiation.
/// </summary>
public class FileManager {
	private DirectoryInfo _managerDirectory;

	public DirectoryInfo ManagerDirectory {
		get {
			return _managerDirectory;
		}
	}

	public FileManager(DirectoryInfo directory) {
		_managerDirectory = directory;
	}

	/// <summary>
	/// Method for getting files in current directory.
	/// </summary>
	/// <returns>A <c>List</c> of File type objects.</returns>
	public List<File> GetFiles() {
		var fileList = new List<File>();
		var files = _managerDirectory.GetFiles();
		foreach (var file in files) {
			switch (file.Extension) {
				case (".png"):
					fileList.Add(new ImageFile(file.FullName));
					break;
				case (".mp4"):
					fileList.Add(new VideoFile(file.FullName));
					break;
			}
		}

		return fileList;
	}

	/// <summary>
	/// Deletes the current directory and all of it's files.
	/// </summary>
	public void DeleteDirectory() {
		var files = _managerDirectory.GetFiles();
		foreach (var file in files) {
			file.Delete();
		}

		_managerDirectory.Delete();
	}

	/// <summary>
	/// Checks if there is a file with a specified name in the current directory.
	/// </summary>
	/// <param name="fileName">the name of the file.</param>
	/// <returns><c>true</c> - if a file with the name <c>fileName</c> exists;
	/// <c>false</c> - if there is no file in the current directory with that name.</returns>
	public bool NameExists(string fileName) {
		return System.IO.File.Exists(_managerDirectory.FullName + "\\" + fileName);
	}

	/// <summary>
	/// Adds a file to the current FileManager directory.
	/// </summary>
	/// <param name="file">a file to add that is represented using the <c>File</c> class.</param>
	public void CreateFile(File file) {
		var fileName = file.Name + file.Extension;
		var fileNumber = 1;
		while (NameExists(fileName)) {
			fileName = file.Name + "_" + fileNumber++ + file.Extension;
		}

		System.IO.File.Copy(file.Path, _managerDirectory.FullName + "\\" + fileName);
		_managerDirectory.Refresh();
	}

	/// <summary>
	/// Deletes a file in the current directory by the <c>File</c> class.
	/// </summary>
	/// <param name="file">an object that represents a file using the <c>File</c> class.</param>
	public void Delete(File file) {
		if (System.IO.File.Exists(_managerDirectory.FullName)) {
			System.IO.File.Delete(file.Path);
			_managerDirectory.Refresh();
		}
	}

	/// <summary>
	/// Deletes a file in the current directory by the file's name.
	/// </summary>
	/// <param name="fileName">the name of the file that will be deleted.</param>
	public void Delete(string fileName) {
		System.IO.File.Delete(_managerDirectory.FullName + "\\" + fileName);
		_managerDirectory.Refresh();
	}
}