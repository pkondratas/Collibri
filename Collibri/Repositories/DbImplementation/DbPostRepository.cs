using Collibri.Data;
using Collibri.Models;

namespace Collibri.Repositories.DbImplementation
{
    public class DbPostRepository : IPostRepository
    {
    
        private readonly DataContext _context;
        
        public DbPostRepository(DataContext dataContext)
        {
            _context = dataContext;
        }
    
        public Post CreatePost(Post post)
        {
            post.Id = Guid.NewGuid();
            post.CreationDate = DateTime.UtcNow;
            post.LastUpdatedDate = DateTime.UtcNow;
            _context.Posts.Add(post);
            _context.SaveChanges();

            return post;
        }

        public IEnumerable<Post> GetAllPosts(int sectionId)
        {
            return _context.Posts.Where(x => x.SectionId == sectionId);
        }

        public Post? UpdatePostById(Guid postId, Post post)
        {
            var postToUpdate = _context.Posts.SingleOrDefault(x => x.Id == postId);
            
            if (postToUpdate == null)
            {
                return null;
            }

            postToUpdate.LikeCount = post.LikeCount;
            postToUpdate.DislikeCount = post.DislikeCount;
            postToUpdate.Title = post.Title;
            postToUpdate.Description = post.Description;
            postToUpdate.LastUpdatedDate = DateTime.UtcNow;
            _context.Posts.Update(postToUpdate);
            _context.SaveChanges();

            return postToUpdate;
        }

        public Post? DeletePostById(Guid postId)
        {
            var postToDelete = _context.Posts.SingleOrDefault(x => x.Id == postId);

            if (postToDelete == null)
            {
                return null;
            }

            _context.Posts.Remove(postToDelete);
            _context.SaveChanges();

            return postToDelete;
        }

        public IEnumerable<Post> DeleteAllPostsInSection(int sectionId)
        {
            var postsInSection = _context.Posts.Where(x => x.SectionId == sectionId);

            foreach (var post in postsInSection)
            {
                _context.Posts.Remove(post);
            }

            _context.SaveChanges();

            return postsInSection;
        }
    }
}