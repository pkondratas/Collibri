using Microsoft.AspNetCore.Mvc;

namespace Collibri.Models.Documents;

public interface IDocumentRepository
{
    public Document? CreateDocument(Document document);

    public List<Document> GetDocuments();
}