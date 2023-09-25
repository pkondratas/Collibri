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

        
        public Document? CreateDocument(Document document)
        {

            

            document.Id = new Random().Next(1, int.MaxValue);

            if (DocumentExists(document.Id))
            {
                return null;
            }
            
            _documentList?.Add(document);

            _dataHandler.PostAllItems(_documentList, ModelType.Documents);


            return document;


        }

        public List<Document> GetDocuments()
        {
            return _dataHandler.GetAllItems<Document>(ModelType.Documents);
        }

        public bool DeleteById(int id)
        {
            if (DocumentExists(id))
            {
                _documentList?.Remove(GetById(id) ?? throw new InvalidOperationException());
                if (_documentList != null)
                {
                    _dataHandler.PostAllItems(_documentList, ModelType.Documents);
                }
                return true;
            }
        
            return false;
        }

        
        public bool DocumentExists(int id)
        {
            if (_documentList != null)
            {
                foreach (Document documents in _documentList)
                {
                    if (documents.Id.Equals(id))
                    {
                        return true;
                    }
                }
                
            }

            return false;
        }

        public Document? GetById(int id)
        {
            if (_documentList != null)
            {
                foreach (Document documents in _documentList)
                {
                    if (documents.Id.Equals(id))
                    {
                        return documents;
                    }
                }
            }
                
                

            return null;
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