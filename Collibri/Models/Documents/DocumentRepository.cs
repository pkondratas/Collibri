using Collibri.Models.DataHandling;
using Collibri.Models.Documents;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Models.Documents
{
    public class DocumentRepository : IDocumentRepository
    {
        private readonly IDataHandler _dataHandler;


        public DocumentRepository(IDataHandler dataHandler)
        {
            _dataHandler = dataHandler;
        }

        public Document? CreateDocument(Document document, int sectionId)
        {
            var documentList = _dataHandler.GetAllItems<Document>(ModelType.Documents);
            document.Id = new Random().Next(1, int.MaxValue);

            if (DocumentExists(document.Id))
            {
                return null;
            }

            document.SectionId = sectionId;
            documentList?.Add(document);

            _dataHandler.PostAllItems(documentList, ModelType.Documents);

            return document;
        }

        public IEnumerable<Document> GetDocuments(int sectionId)
        {
            var documentList = _dataHandler.GetAllItems<Document>(ModelType.Documents);
            return documentList.Where(document => document.SectionId == sectionId);
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

        public bool DocumentExists(int id)
        {
            var documentList = _dataHandler.GetAllItems<Document>(ModelType.Documents);
            return documentList?.Any(documents => documents.Id == id) ?? false;
        }

        public Document? GetById(int id)
        {
            var documentList = _dataHandler.GetAllItems<Document>(ModelType.Documents);
            return documentList?.FirstOrDefault(documents => documents.Id == id);
        }

        public Document? UpdateDocument(Document document, int id)
        {
            var documentList = _dataHandler.GetAllItems<Document>(ModelType.Documents);
            var documentToUpdate = documentList.SingleOrDefault(x => x.Id == id);
            
            if (documentToUpdate == null || !documentList.Remove(documentToUpdate))
            {
                return null;
            }
            
            documentToUpdate.SectionId = document.SectionId;
            documentToUpdate.Title = document.Title;
            documentToUpdate.Text = document.Text;
            _dataHandler.PostAllItems(documentList, ModelType.Documents);
        }
    }
}