using System.Text.Json;

namespace Collibri.Models.DataHandling
{
    public class DataHandler : IDataHandler
    {
        private readonly string _dataDirectory 
            = $@"{Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data";

        public List<T> GetAllItems<T>(ModelType type)
        {
            string data = File.ReadAllText($@"{_dataDirectory}\{type.ToString()}.json");
            
            return JsonSerializer.Deserialize<List<T>>(data) ?? throw new InvalidOperationException();
        }

        public void PostAllItems<T>(List<T> itemList, ModelType type)
        {
            string data = JsonSerializer.Serialize(itemList, new JsonSerializerOptions
            {
                WriteIndented = true
            });
            File.WriteAllText($@"{_dataDirectory}\{type.ToString()}.json", data);
        }
    }
}
