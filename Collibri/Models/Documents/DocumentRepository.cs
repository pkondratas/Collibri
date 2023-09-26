using Collibri.Models.DataHandling;
using Collibri.Models.Documents;
using Microsoft.AspNetCore.Mvc;

namespace Collibri.Models.Documents
{
    public class DocumentRepository : IDocumentRepository
    {
        private readonly IDataHandler _dataHandler;
        private static List<Document>? _documentList;

        public DocumentRepository(IDataHandler dataHandler)
        {
            _dataHandler = dataHandler;
            _documentList = _dataHandler.GetAllItems<Document>(ModelType.Documents);
        }


        public Document? CreateDocument(Document document, int sectionId)
        {
            document.Id = new Random().Next(1, int.MaxValue);

            if (DocumentExists(document.Id))
            {
                return null;
            }

            document.SectionId = sectionId;
            _documentList?.Add(document);

            _dataHandler.PostAllItems(_documentList, ModelType.Documents);
            
            return document;
        }

        public IEnumerable<Document> GetDocuments(int sectionId)
        {
            return _documentList.Where(document => document.SectionId == sectionId);
        }

        public Document? DeleteById(int id)
        {
            if (DocumentExists(id))
            {
                var document = GetById(id);
                _documentList?.Remove(document ?? throw new InvalidOperationException());
                if (_documentList != null)
                {
                    _dataHandler.PostAllItems(_documentList, ModelType.Documents);
                }

                return document;
            }

            return null;
        }

        public bool DocumentExists(int id)
        {
            return _documentList?.Any(documents => documents.Id == id) ?? false;
        }

        public Document? GetById(int id)
        {
            return _documentList?.FirstOrDefault(documents => documents.Id == id);
        }

        public Document? UpdateDocument(Document document, int id)
        {
            if (DocumentExists(id))
            {
                var doc = GetById(id);
                if (doc != null)
                {
                    doc.SectionId = document.SectionId;
                    doc.Title = document.Title;
                    doc.Text = document.Text;
                    if (_documentList != null)
                    {
                        _dataHandler.PostAllItems(_documentList, ModelType.Documents);
                    }

                    return doc;
                }
            }
            return null;
        }
    }
}