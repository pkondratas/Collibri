using Collibri.Models;

namespace Collibri.Repositories
{
    public interface IDocumentRepository
    {
        public Document? CreateDocument(Document document, string postId);
        public IEnumerable<Document> GetDocuments(string postId);
        public Document? DeleteById(int id);
        public Document? UpdateDocument(Document document, int id);
    }
}