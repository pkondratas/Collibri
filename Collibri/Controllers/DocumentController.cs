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
        static List<Document> list = new List<Document>();

        private readonly IDocumentRepository _documentRepository;

        public DocumentController(IDocumentRepository documentRepository)
        {
            _documentRepository = documentRepository;
        }
        
        [HttpPost]
        public IActionResult CreateDocument([FromBody]Document input, string roomName, string sectionName)
        {
            Document document = new Document(input.Id, input.author, input.text);
            list.Add(document);

            var result = _documentRepository.SaveToFile(document, roomName, sectionName);
            
            return Ok();
            
        }

        [HttpGet]
        public List<Document> GetList()
        {
            return list;
        }
        
    }
    
    
    
    
    
   

}