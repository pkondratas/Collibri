namespace Collibri;

/// <summary>
/// Abstract class that stores basic information
/// about a file (name, extension, file path).
/// </summary>
public abstract class File {
	private protected string _name;
	private protected string _extension;
	private protected string _path;

	public File(string path) {
		_path = path;
		var fullName = path.Substring(path.LastIndexOf('\\') + 1).Split('.');
		_name = fullName[0];
		_extension = "." + fullName[1];
	}
	
	public string Name {
		get {
			return _name;
		}
	}

	public string Extension {
		get {
			return _extension;
		}
	}

	public string Path {
		get {
			return _path;
		}
	}
	
	/// <summary>
	/// Moves the file from the current directory to a specified one.
	/// </summary>
	/// <param name="newPath">the path where the file will be moved.</param>
	public void ChangeDirectory(string newPath) {
		System.IO.File.Move(_path, newPath);
	}
}