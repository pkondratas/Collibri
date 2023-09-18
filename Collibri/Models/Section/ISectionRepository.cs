namespace Collibri.Models.Section
{
    public interface ISectionRepository
    {
        Section? CreateSection(Section section, string roomName);
    }
}

