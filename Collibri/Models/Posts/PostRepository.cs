using Collibri.Models.DataHandling;

namespace Collibri.Models.Posts
{
    public class PostRepository : IPostRepository
    {
        private readonly IDataHandler _dataHandler;
        
        public PostRepository(IDataHandler dataHandler)
        {
            _dataHandler = dataHandler;
        }

        public Post CreatePost(Post post)
        {
            var postList = _dataHandler.GetAllItems<Post>(ModelType.Posts);

            post.PostId = Guid.NewGuid();
            post.CreationDate = DateTime.Now;
            post.LastUpdatedDate = DateTime.Now;
            postList.Add(post);
            
            _dataHandler.PostAllItems(postList, ModelType.Posts);
            
            return post;
        }

        public IEnumerable<Post> GetAllPosts(int sectionId)
        {
            var postList = _dataHandler.GetAllItems<Post>(ModelType.Posts);
            var queriedPosts = postList.Where(x => x.SectionId == sectionId);

            return queriedPosts;
        }

        public Post? UpdatePostById(Guid postId, Post post)
        {
            var postList = _dataHandler.GetAllItems<Post>(ModelType.Posts);
            var postToUpdate = postList.SingleOrDefault(x => x.PostId == postId);
            
            if (postToUpdate == null)
            {
                return null;
            }

            postToUpdate.LikeCount = post.LikeCount;
            postToUpdate.DislikeCount = post.DislikeCount;
            postToUpdate.Title = post.Title;
            postToUpdate.LastUpdatedDate = DateTime.Now;
            _dataHandler.PostAllItems(postList, ModelType.Posts);

            return postToUpdate;
        }
    }
}

