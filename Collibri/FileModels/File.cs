namespace Collibri;

/// <summary>
/// Abstract class that stores basic information
/// about a file (name, extension, file path).
/// </summary>
public abstract class File {
	private readonly string _name;
	private readonly string _extension;
	private readonly string _path;

	public File(string path) {
		this._path = path;
		var fullName = path.Substring(path.LastIndexOf('\\') + 1).Split('.');
		_name = fullName[0];
		_extension = "." + fullName[1];
	}

	/// <summary>
	/// Method for getting the file's name.
	/// </summary>
	/// <returns>String of the file's name.</returns>
	public string GetName() {
		return _name;
	}

	/// <summary>
	/// Method for getting the name of the file's extension
	/// including the leading dot . in front.
	/// </summary>
	/// <returns>String of the extension.</returns>
	public string GetExtension() {
		return _extension;
	}

	/// <summary>
	/// Method for getting the full path of the file.
	/// The separator symbol is <c>\</c>.
	/// </summary>
	/// <returns>String of file's path.</returns>
	public string GetPath() {
		return _path;
	}

	/// <summary>
	/// Moves the file from the current directory to a specified one.
	/// </summary>
	/// <param name="newPath">the path where the file will be moved.</param>
	public void ChangeDirectory(string newPath) {
		System.IO.File.Move(_path, newPath);
	}
}