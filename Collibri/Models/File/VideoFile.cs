namespace Collibri;

/// <summary>
/// Video class that extends the File class.
/// Stores basic information about a video file
/// (name, extension, file path).
/// Allowed video formats: .mp4
/// </summary>
public class VideoFile : File {
	public VideoFile(string path) : base(path) {
		if (_extension != ".mp4")
			throw new ArgumentException();
	}

}