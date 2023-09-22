using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Collibri.Models.Documents;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Controllers
{
    
    [Route("/v1/rooms/{roomName}/sections/{sectionName}")] // tokiu ir tokiu adresu issaugos faila.
    [ApiController]
    public class DocumentController : ControllerBase
    {
        // static List<Document> list = new List<Document>();

        private readonly IDocumentRepository _documentRepository;

        public DocumentController(IDocumentRepository documentRepository)
        {
            _documentRepository = documentRepository;
        }
        
        [HttpPost]
        public IActionResult CreateDocument([FromBody]Document input)
        {
            // Document document = new Document(input.ID, input.author, input.text);
            // list.Add(document);

            var result = _documentRepository.CreateDocument(input);
            return result == null? Conflict(): Ok(result);
            
        }

        [HttpGet]
        public IActionResult GetDocuments()
        {
            return Ok(_documentRepository.GetDocuments());
        }
        
    }
    
    
    
    
    
   

}