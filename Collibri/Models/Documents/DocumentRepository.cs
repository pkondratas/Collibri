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

        public Document? CreateDocument(Document document)
        {
            // var documentPath = $@"{_documentDirectory.FullName}\{roomName}\{sectionName}";

            List<Document> documentList = _dataHandler.GetAllItems<Document>(ModelType.Documents);


            foreach (Document documents in documentList)
            {
                if (documents.Text.Equals(document.Text) && documents.Title.Equals(document.Title) &&
                    documents.ID.Equals(document.ID))
                {
                    return null;
                }
            }

            document.ID = new Random().Next(1, int.MaxValue);
            documentList.Add(document);

            _dataHandler.PostAllItems(documentList, ModelType.Documents);


            return document;


        }

        public List<Document> GetDocuments()
        {
            return _dataHandler.GetAllItems<Document>(ModelType.Documents);
        }
    }
}