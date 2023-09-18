using Microsoft.AspNetCore.Mvc;

namespace Collibri.Models.Documents;

public class DocumentRepository : IDocumentRepository
{
    private readonly DirectoryInfo _documentDirectory 
        = new DirectoryInfo($@"{Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data");
    public IActionResult SaveToFile(Document document, string roomName, string sectionName)
    {
        var documentPath = $@"{_documentDirectory.FullName}\{roomName}\{sectionName}";
    
        try
        {
            if (!Directory.Exists(documentPath))
                Directory.CreateDirectory(documentPath);
            else
                result = null;
        }
        catch (IOException e)
        {
            //reikalingas normalus exception handlingas(vienas is ateities tasku)
            Console.WriteLine("Error: " + e.Message);
        }
        
        // string path = "C:\\Users\\Dovix\\Desktop\\docs\\" + input.author+ ".txt"; // zinoma cia tik pas mane
        // if (!(System.IO.File.Exists(path)))
        // {
        //     System.IO.File.WriteAllText(path, input.text);
        // }
        // else
        // {
        //     path = "C:\\Users\\Dovix\\Desktop\\docs\\" + input.author+"_1"+ ".txt";
        //     System.IO.File.WriteAllText(path, input.text);
        // }
    }
}