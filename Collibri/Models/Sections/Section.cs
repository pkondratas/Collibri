namespace Collibri.Models.Sections
{
    public class Section : IEquatable<Section>
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

        public bool Equals(Section? other)
        {
            if (other == null)
            {
                return false;
            }

            return this.RoomId.Equals(other.RoomId) && this.SectionName.Equals(other.SectionName);
        }
    }   
}