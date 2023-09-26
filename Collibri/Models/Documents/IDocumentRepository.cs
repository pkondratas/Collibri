using Microsoft.AspNetCore.Mvc;

namespace Collibri.Models.Documents
{
    public interface IDocumentRepository
    {
        public Document? CreateDocument(Document document, int sectionId);
        public IEnumerable<Document> GetDocuments(int sectionId);
        public Document? DeleteById(int id);
        public bool DocumentExists(int id);
        public Document? GetById(int id);
        public Document? UpdateDocument(Document document, int id);
    }
}