namespace Collibri;

/// <summary>
/// A class for managing section's files.
/// Creates new directory on instantiation.
/// </summary>
public class FileManager {
	private readonly DirectoryInfo _managerDirectory;

	public FileManager(string name) {
		var projectPath = Directory.GetParent(Directory.GetCurrentDirectory()).Parent.FullName;
		_managerDirectory = Directory.CreateDirectory(projectPath + "\\" + name);
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
	/// Method for getting the number of files in current directory.
	/// </summary>
	/// <returns>the number of files in current directory.</returns>
	public int GetFileCount() {
		var count = 0;
		foreach (var file in _managerDirectory.GetFiles()) {
			count++;
		}

		return count;
	}

	/// <summary>
	/// Method for getting the full path of current directory.
	/// </summary>
	/// <returns>path of current directory.</returns>
	public string GetDirectory() {
		return _managerDirectory.FullName;
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
	public void AddFile(File file) {
		var fileName = file.GetName() + file.GetExtension();
		var fileNumber = 1;
		while (NameExists(fileName)) {
			fileName = file.GetName() + "_" + fileNumber++ + file.GetExtension();
		}

		System.IO.File.Copy(file.GetPath(), _managerDirectory.FullName + "\\" + fileName);
		_managerDirectory.Refresh();
	}

	/// <summary>
	/// Deletes a file in the current directory by the <c>File</c> class.
	/// </summary>
	/// <param name="file">an object that represents a file using the <c>File</c> class.</param>
	public void Delete(File file) {
		if (System.IO.File.Exists(_managerDirectory.FullName)) {
			System.IO.File.Delete(file.GetPath());
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