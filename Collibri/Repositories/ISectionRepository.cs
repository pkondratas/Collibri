using Collibri.Models;

namespace Collibri.Repositories
{
    public interface ISectionRepository
    {
        Section? CreateSection(Section section);

        IEnumerable<Section> GetAllSections(int roomId);

        Section? UpdateSectionById(Section section, int sectionId);

        Section? DeleteSectionById(int sectionId);
    }
}

