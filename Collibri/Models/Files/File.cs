namespace Collibri.Models.Files
{
	/// <summary>
	/// Class that stores basic information
	/// about a file (name, extension, file path, post ID).
	/// </summary>
	public class File
	{
		public string Name { get; }

		public string Path { get; }

		public Guid PostId { get; }
		public File(string path, Guid postId)
		{
			Path = path;
			Name = path.Substring(path.LastIndexOf(System.IO.Path.DirectorySeparatorChar) + 1);
			PostId = postId;
		}
	}
}