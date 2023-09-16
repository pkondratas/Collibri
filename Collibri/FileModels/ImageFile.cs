namespace Collibri;

/// <summary>
/// Image class that extends the File class.
/// Stores basic information about an image file
/// (name, extension, file path).
/// Allowed image file extensions: .png
/// </summary>
public class ImageFile : File {
	public ImageFile(string path) : base(path) { }

}