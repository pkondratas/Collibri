namespace Collibri.Models.Documents;

public class Document
{

    private int ID;
    private string author;
    private string text;

    public string ID
    {
        get { return ID; }
        set { ID = value; }
    }

    public string Author
    {
        get { return author; }
        set { author = value; }
    }
    
    public string Text
    {
        get { return text; }
        set { text = value; }
    }
    
    
    
    public Document(int ID, string author, string text)
    {
        this.author = author;
        this.ID = ID;
        this.text = text;
    }

        
}