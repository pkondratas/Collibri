namespace Collibri.Models.Files;

/// <summary>
/// Abstract class that stores basic information
/// about a file (name, extension, file path).
/// </summary>
public class File
{
	private protected string _name;
	private protected string _extension;
	// private protected int _id;
	private protected byte[] _fileData;

	public File(IFormFile requestedFile)
	{
		var fullName = requestedFile.FileName.Split(".");
		_name = fullName[0];
		_extension = "." + fullName[1];
		
		var memoryStream = new MemoryStream();
		requestedFile.CopyTo(memoryStream);
		_fileData = memoryStream.ToArray();
	}

	public string Name
	{
		get { return _name; }
	}

	public string Extension
	{
		get { return _extension; }
	}

	// public int Id
	// {
	// 	get { return _id; }
	// }

	public byte[] ByteData
	{
		get { return _fileData; }
	}
}