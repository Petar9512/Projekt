using Fakultet.Data;
using Fakultet.Mapping;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<FakultetContext>(opcije =>
{
    opcije.UseSqlServer(builder.Configuration.GetConnectionString("FakultetContext"));
});

builder.Services.AddCors(opcije =>
{
    opcije.AddPolicy("Cors Policy",
        builder =>
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
        );
});

builder.Services.AddAutoMapper(typeof(FakultetMappingProfile));

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI(o =>
    {
        o.ConfigObject.AdditionalItems.Add("requestSnippetsEnabled", true);
        o.EnableTryItOutByDefault();
    });
//}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseStaticFiles();

app.UseDefaultFiles();

app.MapFallbackToFile("index.html");

app.UseCors("Cors Policy");

app.Run();
