namespace Collibri.Models.Posts
{
    public interface IPostRepository
    {
        public Post CreatePost(Post post);

        public IEnumerable<Post> GetAllPosts(int sectionId);

        public Post? UpdatePostById(Guid postId, Post post);

        public Post? DeletePostById(Guid postId);
    }
}