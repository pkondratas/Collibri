namespace Collibri.Models.Files
{
	/// <summary>
	/// Class that stores basic information
	/// about a file (name, extension, file path, post ID).
	/// </summary>
	public class File
	{
		private string _name;
		private string _path;
		private Guid _postId; //Paskui pakeist is int i Guid

		public File(string path, Guid postId)
		{
			_path = path;
			_name = path.Substring(path.LastIndexOf('\\') + 1);
			_postId = postId;
		}

		public string Name
		{
			get { return _name; }
		}

		public string Path
		{
			get { return _path; }
		}

		public Guid PostId
		{
			get { return _postId; }
		}
	}
}