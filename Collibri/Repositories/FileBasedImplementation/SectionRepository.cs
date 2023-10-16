using Collibri.Models;
using Collibri.Repositories.DataHandling;

namespace Collibri.Repositories.FileBasedImplementation
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
                if (sections.Equals(section))
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

        public Section? UpdateSectionById(Section newSection, int sectionId)
        {
            var sectionList = _dataHandler.GetAllItems<Section>(ModelType.Sections);
            var sectionToUpdate = sectionList.SingleOrDefault(x => x.SectionId == sectionId);

            foreach (var sections in sectionList)
            {
                if (sections.Equals(newSection) || sectionToUpdate == null)
                {
                    return null;
                } 
            }
            
            //updating contents of section part
            sectionToUpdate.SectionName = newSection.SectionName;
            _dataHandler.PostAllItems(sectionList, ModelType.Sections);
            
            return sectionToUpdate;
        }

        public Section? DeleteSectionById(int sectionId)
        {
            var sectionList = _dataHandler.GetAllItems<Section>(ModelType.Sections);
            var sectionToDelete = sectionList.SingleOrDefault(x => x.SectionId == sectionId);
            
            if(sectionToDelete == null || !sectionList.Remove(sectionToDelete))
            {
                return null;
            }
            
            _dataHandler.PostAllItems(sectionList, ModelType.Sections);
            
            return sectionToDelete;
        }
    }
}

