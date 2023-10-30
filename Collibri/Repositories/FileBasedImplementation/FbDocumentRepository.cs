using Collibri.Models;
using Collibri.Repositories.DataHandling;
using Collibri.Repositories.ExtensionMethods;

namespace Collibri.Repositories.FileBasedImplementation
{
    public class FbDocumentRepository : IDocumentRepository
    {
        private readonly IDataHandler _dataHandler;
        
        public FbDocumentRepository(IDataHandler dataHandler)
        {
            _dataHandler = dataHandler;
        }

        public Document? CreateDocument(Document document, string postId)
        {
            var documentList = _dataHandler.GetAllItems<Document>(ModelType.Documents);
            document.Id = new int().GenerateNewId(documentList.Select(x => x.Id).ToList());

            foreach (var doc in documentList)
            {
                if (doc.Id == document.Id)
                {
                    return null;
                }
            }

            document.PostId = Guid.Parse(postId);
            documentList.Add(document);

            _dataHandler.PostAllItems(documentList, ModelType.Documents);

            return document;
        }

        public IEnumerable<Document> GetDocuments(string PostId)
        {
            var documentList = _dataHandler.GetAllItems<Document>(ModelType.Documents);
            return documentList.Where(document => document.PostId.Equals(Guid.Parse(PostId)));
        }

        public Document? DeleteById(int id)
        {
            var documentList = _dataHandler.GetAllItems<Document>(ModelType.Documents);
            var documentToDelete = documentList.SingleOrDefault(x => x.Id == id);
            
            if (documentToDelete == null || !documentList.Remove(documentToDelete))
            {
                return null;
            }
            
            _dataHandler.PostAllItems(documentList, ModelType.Documents);
            return documentToDelete;
        }
        

        public Document? UpdateDocument(Document document, int id)
        {
            var documentList = _dataHandler.GetAllItems<Document>(ModelType.Documents);
            var documentToUpdate = documentList.SingleOrDefault(x => x.Id == id);
            
            if (documentToUpdate == null)
            {
                return null;
            }
            
            documentToUpdate.Title = document.Title;
            documentToUpdate.Text = document.Text;
            _dataHandler.PostAllItems(documentList, ModelType.Documents);

            return documentToUpdate;
        }
    }
}