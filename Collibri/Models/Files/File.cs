namespace Collibri.Models.Files;

/// <summary>
/// Abstract class that stores basic information
/// about a file (name, extension, file path).
/// </summary>
public class File {
	private protected string _name;
	private protected string _extension;
	private protected string _path;

	public File(string path, IFormFile requestedFile) {
		_path = path;
		var fullName = requestedFile.FileName.Split(".");
		_name = fullName[0];
		_extension = "." + fullName[1];
		
		SaveFile(requestedFile);
	}

	private void SaveFile(IFormFile file) {
		var name = _name + _extension;
		var i = 1;
		while (System.IO.File.Exists(_path + name)) {
			name = _name + "_" + i++ + _extension;
		}

		var fileStream = System.IO.File.Create(_path + name);
		file.CopyTo(fileStream);
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
}