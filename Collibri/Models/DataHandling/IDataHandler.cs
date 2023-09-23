namespace Collibri.Models.DataHandling
{
    public interface IDataHandler
    {
        public List<T> GetAllItems<T>(ModelType type);
        public void PostAllItems<T>(List<T> itemList, ModelType type);
    }   
}