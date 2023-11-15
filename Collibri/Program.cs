using System.IO.Abstractions;
using Collibri.Data;
using Collibri.Models;
using Collibri.Repositories;
// using Collibri.Repositories.DataHandling;
using Collibri.Repositories.DbImplementation;
using Collibri.Repositories.FileBasedImplementation;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddControllersWithViews();
builder.Services.AddScoped<IFileRepository, FileRepository>();
builder.Services.AddScoped<IFileSystem, FileSystem>();
//builder.Services.AddScoped<IDataHandler, DataHandler>();
builder.Services.AddScoped<ISectionRepository, DbSectionRepository>();
builder.Services.AddScoped<INoteRepository, DbNoteRepository>();
builder.Services.AddScoped<IRoomRepository, DbRoomRepository>();
builder.Services.AddScoped<IDocumentRepository, DbDocumentRepository>();
builder.Services.AddScoped<IPostRepository, DbPostRepository>();
// builder.Services.AddScoped<IAccountRepository, DbAccountRepository>();
builder.Services.AddDbContext<DataContext>(options =>
	options.UseNpgsql(builder.Configuration.GetConnectionString("LocalConnection")));

builder.Services.AddIdentity<Account, IdentityRole<Guid>>()
	.AddEntityFrameworkStores<DataContext>()
	.AddDefaultTokenProviders();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
	// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
	app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
	name: "default",
	pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();