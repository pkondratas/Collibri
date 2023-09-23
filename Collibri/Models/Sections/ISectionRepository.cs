namespace Collibri.Models.Sections
{
    public interface ISectionRepository
    {
        Section? CreateSection(Section section, string roomName);
    }
}

