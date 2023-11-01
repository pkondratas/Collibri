using Collibri.Models;
using Collibri.Repositories.ExtensionMethods;

namespace Collibri.Repositories.DbImplementation
{
    public class DbSectionRepository : ISectionRepository
    {
        private readonly DataContext _context;
        
        public DbSectionRepository(DataContext dataContext)
        {
            _context = dataContext;
        }
    
        public Section? CreateSection(Section section)
        {
            if (_context.Sections.ToList().Any(sections => sections.Equals(section)))
            {
                return null;
            }

            section.Id = new int().GenerateNewId(_context.Sections.Select(x => x.Id).ToList());
            _context.Sections.Add(section);
            _context.SaveChanges();

            return section;
        }

        public IEnumerable<Section> GetAllSections(int roomId)
        {
            return _context.Sections.Where(section => section.RoomId == roomId);
        }

        public Section? UpdateSectionById(Section section, int sectionId)
        {
            var sectionToUpdate = _context.Sections.SingleOrDefault(x => x.Id == sectionId);
            
            //method 
            if (_context.Sections.Any(sections => sections.Equals(section)) || sectionToUpdate == null)
            {
                return null;
            }

            //updating contents of section part
            sectionToUpdate.SectionName = section.SectionName;
            _context.Sections.Update(sectionToUpdate);
            _context.SaveChanges();

            return sectionToUpdate;
        }

        public Section? DeleteSectionById(int sectionId)
        {
            var sectionToDelete = _context.Sections.SingleOrDefault(x => x.Id == sectionId);
            
            if(sectionToDelete == null)
            {
                return null;
            }

            _context.Sections.Remove(sectionToDelete);
            _context.SaveChanges();

            return sectionToDelete;
        }
    }
}