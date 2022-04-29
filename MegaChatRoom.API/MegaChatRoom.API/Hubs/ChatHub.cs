using MegaChatRoom.API.Requests;
using Microsoft.AspNetCore.SignalR;

namespace MegaChatRoom.API.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(SendMessageRequest message)
        {
            await Clients.All.SendAsync("messageReceived", message);
        }
    }
}
