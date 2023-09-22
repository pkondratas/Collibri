namespace Collibri.Models.Sections
{
    public interface ISectionRepository
    {
        Section? CreateSection(Section section, string roomName);

        IEnumerable<Section> GetAllSections(int roomId, string roomName); 
    }
}

