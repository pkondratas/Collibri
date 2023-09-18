namespace Collibri.Tests;

public class FileTest {
	private static string _currentPath = Directory.GetParent(Directory.GetCurrentDirectory()).Parent.FullName;

	[Fact]
	public void FolderNameTest() {
		var fileManager = new FileManager("testFolder");
		//Check if folder name is correct
		Assert.Equal(_currentPath + "\\testFolder", fileManager.ManagerDirectory.FullName);
		//Check if folder is empty
		Assert.True(fileManager.ManagerDirectory.GetFiles().Length == 0);
		fileManager.DeleteDirectory();
	}

	[Fact]
	public void FileCreationDeletionTest() {
		var fileManager = new FileManager("testFolder2");
		//Check if folder is empty
		Assert.True(fileManager.ManagerDirectory.GetFiles().Length == 0);

		//Add new file
		fileManager.CreateFile(new ImageFile(Directory.GetParent(Directory.GetCurrentDirectory())
			.Parent.Parent.FullName + "\\FileTestImage.png"));

		//Check if files are there
		Assert.True(fileManager.ManagerDirectory.GetFiles().Length == 1);
		//Check extension, name and path of file
		var files = fileManager.GetFiles();
		Assert.Equal(files[0].Extension, ".png");
		Assert.Equal(files[0].Name, "FileTestImage");
		Assert.Equal(files[0].Path, _currentPath + @"\testFolder2\FileTestImage.png");

		//Add new files
		var fileDir = Directory.GetParent(Directory.GetCurrentDirectory())
			.Parent.Parent.FullName + "\\FileTestImage.png";
		fileManager.CreateFile(new ImageFile(fileDir));
		fileManager.CreateFile(new ImageFile(fileDir));
		fileManager.CreateFile(new ImageFile(fileDir));
		fileManager.CreateFile(new ImageFile(fileDir));

		//Check if all files were added
		Assert.True(fileManager.ManagerDirectory.GetFiles().Length == 5);
		//Delete files
		fileManager.Delete("FileTestImage.png");
		//Check if deleted files are gone
		Assert.True(fileManager.ManagerDirectory.GetFiles().Length == 4);

		fileManager.DeleteDirectory();
	}
}