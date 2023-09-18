using Microsoft.AspNetCore.Mvc;

namespace Collibri.Models.Documents;

public interface IDocumentRepository
{
    public IActionResult SaveToFile(Document document, string roomName, string sectionName);


}