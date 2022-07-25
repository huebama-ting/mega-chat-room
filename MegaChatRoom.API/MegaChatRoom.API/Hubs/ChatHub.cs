using MegaChatRoom.Messages.Services.Interfaces;
using MegaChatRoom.Messages.Services.Models;
using Microsoft.AspNetCore.SignalR;

namespace MegaChatRoom.API.Hubs
{
    public class ChatHub : Hub
    {
        private readonly IMessagesService _persistenceService;

        public ChatHub(IMessagesService persistenceService)
        {
            _persistenceService = persistenceService;
        }

        public async Task SendMessage(MessageModel message)
        {
            await _persistenceService.SaveAsync(message);
            await Clients.All.SendAsync("messageReceived", message);
        }

        public async Task ConnectUser(MessageModel user)
        {
            await Clients.All.SendAsync("userConnected", user);
        }

        public async Task DisconnectUser(MessageModel user)
        {
            await Clients.All.SendAsync("userDisconnected", user);
        }
    }
}
