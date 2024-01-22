using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.EntityFrameworkCore;
using todoapp_WebAPI.data;
using todoapp_WebAPI.Services;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c => {
  c.ResolveConflictingActions(ApiDescriptions => ApiDescriptions.First());
  c.IgnoreObsoleteActions();
  c.IgnoreObsoleteProperties();
  c.CustomSchemaIds(type => type.FullName);
});
builder.Services.AddScoped<TodoService>();

builder.Services.AddDbContext<TodoAppDbContext>(Options=>
Options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();

app.Run();