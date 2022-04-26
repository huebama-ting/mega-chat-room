using MegaChatRoom.API.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();
builder.Services.AddCors();

var app = builder.Build();

app.UseCors((builder) =>
{
    builder.WithOrigins("http://localhost:4000")
            .AllowAnyHeader()
            .WithMethods("GET", "POST")
            .AllowCredentials();
});

app.MapHub<ChatHub>("/hub");

app.Run();
