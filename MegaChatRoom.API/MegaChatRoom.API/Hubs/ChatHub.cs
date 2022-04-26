using Microsoft.AspNetCore.SignalR;

namespace MegaChatRoom.API.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(long username, string message)
        {
            await Clients.Others.SendAsync("messageReceived", username, message);
        }
    }
}
