using Collibri.Models;
using Microsoft.EntityFrameworkCore;

namespace Collibri.Data
{
	public class DataContext : DbContext
	{
		public DbSet<Document> Documents { get; set; }
		public DbSet<Note> Notes { get; set; }
		public DbSet<Post> Posts { get; set; }
		public DbSet<Room> Rooms { get; set; }
		public DbSet<Section> Sections { get; set; }
	
		public DataContext(DbContextOptions<DataContext> options) : base(options)
		{
		}
	
		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			builder.HasPostgresExtension("uuid-ossp");
		}
	}
}