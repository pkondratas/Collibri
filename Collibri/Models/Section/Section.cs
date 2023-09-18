namespace Collibri.Models.Section
{
    public class Section
    {  
        //public int SectionId { get; set; }    //fieldai kuriu reiks veliau
        public string SectionName { get; set; }
        // public List<Document> DocumentList { get; set; }
        // public List<Note> NoteList { get; set; }
        // public List<File> FileList { get; set; } 
        
        public Section(string sectionName)
        {
            this.SectionName = sectionName;
        }
    }   
}