namespace Collibri.Models
{
    public class Post
    {
        public Guid Id { get; set; }
        public string CreatorUsername { get; set; } = "";
        public string Title { get; set; } = "";
        public int SectionId { get; set; }
        public int LikeCount { get; set; }
        public int DislikeCount { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }

        public Post()
        {
            
        }
        
        public Post(
            Guid postId, 
            string creatorUsername, 
            string title, 
            int sectionId,
            int likeCount, 
            int dislikeCount,
            DateTime creationDate, 
            DateTime lastUpdatedDate)
        {
            Id = new Guid();
            CreatorUsername = creatorUsername;
            Title = title;
            SectionId = sectionId;
            LikeCount = likeCount;
            DislikeCount = dislikeCount;
            CreationDate = creationDate;
            LastUpdatedDate = lastUpdatedDate;
        }
    }
}

