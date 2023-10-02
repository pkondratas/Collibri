namespace Collibri.Models.Sections
{
    public class Section
    {
        public int SectionId { get; set; }
        public int RoomId { get; set; }
        public string SectionName { get; set; }
        
        public Section(int sectionId, int roomId, string sectionName)
        {
            SectionId = sectionId;
            RoomId = roomId;
            SectionName = sectionName;
        }
    }   
}