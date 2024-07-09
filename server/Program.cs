using Moviz.Models;
using Moviz.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.Configure<MovieDatabaseSettings>(
    builder.Configuration.GetSection("MovieDatabase"));

builder.Services.AddSingleton<MongoDBService>();
builder.Services.AddSingleton<MovieService>();
builder.Services.AddSingleton<AccountsService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("MyAllowSpecificOrigins",
                      policy  =>
                      {
                          policy
                            .WithOrigins("http://localhost:4200")
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                      });
});

var app = builder.Build();

app.UseStaticFiles();
app.UseRouting();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("MyAllowSpecificOrigins");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
