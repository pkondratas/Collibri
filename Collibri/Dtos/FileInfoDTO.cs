namespace Collibri.Dtos
{
    public class FileInfoDTO
    {
        public Guid Id;

        public string Path { get; set; } = "";

        public Guid PostId { get; set; }

        public FileInfoDTO()
        {
            
        }
        
        public FileInfoDTO(string path, Guid postId)
        {
            Id = Guid.NewGuid();
            Path = path;
            PostId = postId;
        }
    }
}