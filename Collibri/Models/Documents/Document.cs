namespace Collibri.Models.Documents;

public class Document
{

    private int _id;
    private string _title;
    private string _text;
    private int _sectionId;

    public int ID
    {
        get => _id;
        set => _id = value;
    }

    public string Title
    {
        get => _title;
        set => _title = value;
    }
    
    public string Text
    {
        get => _text;
        set => _text = value;
    }

    public int SectionId
    {
        get => _sectionId;
        set => _sectionId = value;
    }
    
    
    
    public Document(int id, string title, string text, int sectionId)
    {
        _title = title;
        _id = id;
        _text = text;
        _sectionId = sectionId;
    }

        
}