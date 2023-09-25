using Collibri.Models.DataHandling;

namespace Collibri.Models.Sections
{
    public class SectionRepository : ISectionRepository
    {
        private readonly IDataHandler _dataHandler;

        public SectionRepository(IDataHandler dataHandler)
        {
            _dataHandler = dataHandler;
        }
        
        public Section? CreateSection(Section section)
        {
            var sectionList = _dataHandler.GetAllItems<Section>(ModelType.Sections);
            
            foreach (var sections in sectionList)
            {
                if (sections.RoomId.Equals(section.RoomId) && sections.SectionName.Equals(section.SectionName))
                {
                    return null;
                }
            }
            section.SectionId = new Random().Next(1, int.MaxValue);
            sectionList.Add(section);
            
            _dataHandler.PostAllItems(sectionList, ModelType.Sections);
            
            return section;
        }

        public IEnumerable<Section> GetAllSections(int roomId)
        {
            var sectionList = _dataHandler.GetAllItems<Section>(ModelType.Sections);
            var queriedSection = sectionList.Where(section => section.RoomId == roomId);
            
            return queriedSection;
        }
    }
}

