using Collibri.Models;

namespace Collibri.Repositories
{
    public interface IDocumentRepository
    {
        public Document? CreateDocument(Document document, int sectionId);
        public IEnumerable<Document> GetDocuments(int sectionId);
        public Document? DeleteById(int id);
        public Document? UpdateDocument(Document document, int id);
    }
}