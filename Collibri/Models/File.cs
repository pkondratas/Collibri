namespace Collibri.Models
{
    public class File
    {
        public string Path { get; } = "";

        public Guid PostId { get; }

        public File()
        {
            
        }
        
        public File(string path, Guid postId)
        {
            Path = path;
            PostId = postId;
        }
    }
}