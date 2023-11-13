using Collibri.Data;
using Collibri.Models;

namespace Collibri.Repositories.DbImplementation
{
    public class DbDocumentRepository : IDocumentRepository
    {

        private readonly DataContext _context;
        
        public DbDocumentRepository(DataContext dataContext)
        {
            _context = dataContext;
        }
    
        public Document? CreateDocument(Document document, string postId)
        {
            _context.Documents.Add(document);
            _context.SaveChanges();

            return document;
        }

        public IEnumerable<Document> GetDocuments(string postId)
        {
            return _context.Documents.Where(document => document.PostId.Equals(Guid.Parse(postId)));
        }

        public Document? DeleteById(int id)
        {
            var documentToDelete = _context.Documents.SingleOrDefault(x => x.Id == id);
        
            if (documentToDelete == null)
                return null;
        
            _context.Documents.Remove(documentToDelete);
            _context.SaveChanges();

            return documentToDelete;
        }

        public Document? UpdateDocument(Document document, int id)
        {
            var documentToUpdate = _context.Documents.SingleOrDefault(x => x.Id == id);
            
            if (documentToUpdate == null)
            {
                return null;
            }
            
            documentToUpdate.Title = document.Title;
            documentToUpdate.Text = document.Text;
            _context.Documents.Update(documentToUpdate);
            _context.SaveChanges();

            return documentToUpdate;
        }
    }
}