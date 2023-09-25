namespace Collibri.Models.Sections
{
    public interface ISectionRepository
    {
        Section? CreateSection(Section section);

        IEnumerable<Section> GetAllSections(int roomId); 
    }
}

