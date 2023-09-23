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
    
    [Route("/v1/Documents")] // tokiu ir tokiu adresu issaugos faila.
    [ApiController]
    public class DocumentController : ControllerBase
    {
        

        private readonly IDocumentRepository _documentRepository;

        public DocumentController(IDocumentRepository documentRepository)
        {
            _documentRepository = documentRepository;
        }
        
        [HttpPost]
        public IActionResult CreateDocument([FromBody]Document input)
        {

            var result = _documentRepository.CreateDocument(input);
            return result == null? Conflict(): Ok(result);
            
        }

        [HttpGet]
        public IActionResult GetDocuments()
        {
            return Ok(_documentRepository.GetDocuments());
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteDocument(int id)
        {
            var result = _documentRepository.DeleteById(id);
            return result == true ? Ok() : Conflict();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateDocument([FromBody] Document input, int id)
        {
            var result = _documentRepository.UpdateDocument(input, id);
            return result == null ? Conflict() : Ok(result);
        }
        
    }
    
    
    
    
    
   

}