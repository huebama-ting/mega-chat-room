using MegaChatRoom.API.Extensions;
using MegaChatRoom.API.Hubs;
using MegaChatRoom.Messages.Configuration;
using MegaChatRoom.Messages.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();
builder.Services.AddCors();
builder.Services.AddOptions();
builder.Services.Configure<MessagesConfiguration>(builder.Configuration.GetSection("NoSql"));
builder.Services.AddMessagesConfig();
builder.Services.AddApiServices();

var app = builder.Build();

app.UseCors((builder) =>
{
    builder.WithOrigins("http://localhost:4200", "https://huebama-ting.github.io")
           .AllowAnyMethod()
           .AllowAnyHeader()
           .AllowCredentials();
});
app.MapHub<ChatHub>("/hub");
app.Run();
