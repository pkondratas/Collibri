namespace Collibri.Tests;

public class FileTest {
	private static string _currentPath = Directory.GetParent(Directory.GetCurrentDirectory()).Parent.FullName;

	[Fact]
	public void FolderNameTest() {
		var fileManager = new FileManager("testFolder");
		//Check if folder name is correct
		Assert.Equal(_currentPath + "\\testFolder", fileManager.GetDirectory());
		//Check if folder is empty
		Assert.True(fileManager.GetFileCount() == 0);
		fileManager.DeleteDirectory();
	}

	[Fact]
	public void FileCreationDeletionTest() {
		var fileManager = new FileManager("testFolder2");
		//Check if folder is empty
		Assert.True(fileManager.GetFileCount() == 0);

		//Add new file
		fileManager.AddFile(new ImageFile(Directory.GetParent(Directory.GetCurrentDirectory())
			.Parent.Parent.FullName + "\\FileTestImage.png"));

		//Check if files are there
		Assert.True(fileManager.GetFileCount() == 1);
		//Check extension, name and path of file
		var files = fileManager.GetFiles();
		Assert.Equal(files[0].GetExtension(), ".png");
		Assert.Equal(files[0].GetName(), "FileTestImage");
		Assert.Equal(files[0].GetPath(), _currentPath + @"\testFolder2\FileTestImage.png");

		//Add new files
		var fileDir = Directory.GetParent(Directory.GetCurrentDirectory())
			.Parent.Parent.FullName + "\\FileTestImage.png";
		fileManager.AddFile(new ImageFile(fileDir));
		fileManager.AddFile(new ImageFile(fileDir));
		fileManager.AddFile(new ImageFile(fileDir));
		fileManager.AddFile(new ImageFile(fileDir));

		//Check if all files were added
		Assert.True(fileManager.GetFileCount() == 5);
		//Delete files
		fileManager.Delete("FileTestImage.png");
		//Check if deleted files are gone
		Assert.True(fileManager.GetFileCount() == 4);

		fileManager.DeleteDirectory();
	}
}