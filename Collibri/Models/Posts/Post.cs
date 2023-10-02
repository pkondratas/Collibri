using Collibri.Models.Documents;
using Collibri.Models.Notes;

namespace Collibri.Models.Posts
{
    public class Post
    {
        public Guid PostId { get; set; }
        public string CreatorUsername { get; set; }
        public string Title { get; set; }
        public int SectionId { get; set; }
        public int LikeCount { get; set; }
        public int DislikeCount { get; set; }
        public int NoteId { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LastUpdatedDate { get; set; }

        public Post(
            Guid postId, 
            string creatorUsername, 
            string title, 
            int sectionId,
            int likeCount, 
            int dislikeCount, 
            int noteId, 
            DateTime creationDate, 
            DateTime lastUpdatedDate)
        {
            PostId = postId;
            CreatorUsername = creatorUsername;
            Title = title;
            SectionId = sectionId;
            LikeCount = likeCount;
            DislikeCount = dislikeCount;
            NoteId = noteId;
            CreationDate = creationDate;
            LastUpdatedDate = lastUpdatedDate;
        }
    }
}

