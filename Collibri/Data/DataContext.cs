using Collibri.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace Collibri.Data
{
	public class DataContext : IdentityDbContext<Account, IdentityRole<Guid>, Guid>
	{
		public DbSet<Document> Documents { get; set; }
		public DbSet<Note> Notes { get; set; }
		public DbSet<Post> Posts { get; set; }
		public DbSet<Room> Rooms { get; set; }
		public DbSet<Section> Sections { get; set; }
		public DbSet<Account> Accounts { get; set; }
		public DbSet<RoomMember> RoomMembers { get; set; }

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