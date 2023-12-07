using System.IO.Abstractions;
using Collibri.Data;
using Collibri.Repositories;
// using Collibri.Repositories.DataHandling;
using Collibri.Repositories.DbImplementation;
using Collibri.Repositories.FileBasedImplementation;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Serilog;
using Serilog.Events;

Log.Logger = new LoggerConfiguration()
	.MinimumLevel.Override("Microsoft", LogEventLevel.Information) // Adjust log levels as needed
	.Enrich.FromLogContext()
	.WriteTo.File("log.txt", rollingInterval: RollingInterval.Day)
	.CreateLogger();

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddControllersWithViews();
builder.Services.AddScoped<IFileRepository, DbFileRepository>();
builder.Services.AddScoped<IFileSystem, FileSystem>();
//builder.Services.AddScoped<IDataHandler, DataHandler>();
builder.Services.AddScoped<ISectionRepository, DbSectionRepository>();
builder.Services.AddScoped<INoteRepository, DbNoteRepository>();
builder.Services.AddScoped<IRoomRepository, DbRoomRepository>();
builder.Services.AddScoped<IDocumentRepository, DbDocumentRepository>();
builder.Services.AddScoped<IPostRepository, DbPostRepository>();
// builder.Services.AddScoped<IAccountRepository, DbRegisterRepository>();
builder.Services.AddScoped<DbRegisterRepository>();
builder.Services.AddScoped<DbLoginRepository>();
builder.Services.AddScoped<DbResetPasswordRepository>();


builder.Services.AddDbContext<DataContext>(options =>
	options.UseNpgsql(builder.Configuration.GetConnectionString("LocalConnection")));

builder.Services.AddIdentity<IdentityUser<Guid>, IdentityRole<Guid>>()
	.AddEntityFrameworkStores<DataContext>()
	.AddDefaultTokenProviders();

builder.Logging.AddSerilog();

builder.Services.Configure<IdentityOptions>(options =>
{
	options.Password.RequireUppercase = true;
	options.Password.RequireDigit = true;
	options.Password.RequiredLength = 6;
	options.Password.RequireNonAlphanumeric = false;
});

builder.Services.ConfigureApplicationCookie(options =>
{
	options.Cookie.HttpOnly = true;
	options.ExpireTimeSpan = TimeSpan.FromMinutes(5);

	options.LoginPath = "/v1/login";
	// options.AccessDeniedPath = "/Identity/Account/AccessDenied";
	options.SlidingExpiration = true;
});

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

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
	name: "default",
	pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();