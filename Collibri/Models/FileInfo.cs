namespace Collibri.Models
{
	public class FileInfo
	{
		public Guid Id { get; set; }

		public string Path { get; set; } = "";

		public Guid PostId { get; set; }

		public FileInfo()
		{ 
		
		}
	}
}