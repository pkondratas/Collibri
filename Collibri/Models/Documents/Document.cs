namespace Collibri.Models.Documents
{
    public class Document
    {
        private int _id;
        private string _title;
        private string _text;
        private int _sectionId;
        private Guid _postId;

        public int Id
        {
            get => _id;
            set => _id = value;
        }

        public string Title
        {
            get => _title;
            set => _title = value;
        }

        public string Text
        {
            get => _text;
            set => _text = value;
        }

        public int SectionId
        {
            get => _sectionId;
            set => _sectionId = value;
        }
        
        public Guid PostId
        {
            get => _postId;
            set => _postId = value;
        }


        public Document(int id, Guid postId, string title, string text, int sectionId)
        {
            _title = title;
            _id = id;
            _postId = postId;
            _text = text;
            _sectionId = sectionId;
        }
    }
}