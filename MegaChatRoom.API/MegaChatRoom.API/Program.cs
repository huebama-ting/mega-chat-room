using MegaChatRoom.API.Extensions;
using MegaChatRoom.API.Hubs;
using MegaChatRoom.API.MapperProfiles;
using MegaChatRoom.Messages.Configuration;
using MegaChatRoom.Messages.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSignalR();
builder.Services.AddOptions();
builder.Services.Configure<MessagesConfiguration>(builder.Configuration.GetSection("NoSql"));
builder.Services.AddAutoMapper(typeof(MessagesMappingProfile));
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
app.MapControllers();
app.MapHub<ChatHub>("/hub");
app.Run();
