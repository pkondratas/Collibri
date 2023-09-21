namespace Collibri.Models.Section
{
    public class SectionRepository : ISectionRepository
    {
        private readonly DirectoryInfo _sectionDirectory 
            = new DirectoryInfo($@"{Directory.GetParent(Directory.GetCurrentDirectory())}\Collibri\Data");
        
        public Section? CreateSection(Section section, string roomName)
        {
            var sectionPath = $@"{_sectionDirectory.FullName}\{roomName}\{section.SectionName}";
            var result = (Section?) section;
            
            try
            {
                if (!Directory.Exists(sectionPath))
                    Directory.CreateDirectory(sectionPath);
                else
                    result = null;
            }
            catch (IOException e)
            {
                //reikalingas normalus exception handlingas(vienas is ateities tasku)
                Console.WriteLine("Error: " + e.Message);
            }
            
            return result;
        }
    }
}

