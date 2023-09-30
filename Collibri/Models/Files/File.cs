namespace Collibri.Models.Files
{
	/// <summary>
	/// Class that stores basic information
	/// about a file (name, extension, file path, section ID).
	/// </summary>
	public class File
	{
		private string _name;
		private string _path;
		private int _sectionId;

		public File(string path, int sectionId)
		{
			_path = path;
			_name = path.Substring(path.LastIndexOf('\\') + 1);
			_sectionId = sectionId;
		}

		public string Name
		{
			get { return _name; }
		}

		public string Path
		{
			get { return _path; }
		}

		public int SectionId
		{
			get { return _sectionId; }
		}
	}
}