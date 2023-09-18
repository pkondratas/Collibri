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
        
        [HttpPost]
        public IActionResult PostText([FromBody]Document input, string roomName)
        {
            Document document = new Document(input.ID, input.author, input.text);
            list.Add(document);
            
            string path = "C:\\Users\\Dovix\\Desktop\\docs\\" + input.author+ ".txt"; // zinoma cia tik pas mane
            if (!(System.IO.File.Exists(path)))
            {
                  System.IO.File.WriteAllText(path, input.text);
            }
            else
            {
                path = "C:\\Users\\Dovix\\Desktop\\docs\\" + input.author+"_1"+ ".txt";
                System.IO.File.WriteAllText(path, input.text);
            }
            
            return Ok();
            
        }

        [HttpGet]
        public List<Document> GetList()
        {
            return list;
        }
        
    }
    
    
    
    
    
   

}