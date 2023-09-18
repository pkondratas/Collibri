namespace Collibri.Models.Documents;

public class Document 
{

    public int ID { get; set; }
    public string author { get; set; }

    public string text { get; set; }

    public Document(int ID, string author, string text)
    {
        this.author = author;
        this.ID = ID;
        this.text = text;
    }

        
}