using MegaChatRoom.API.Requests;
using MegaChatRoom.API.Services.Interfaces;
using Microsoft.AspNetCore.SignalR;

namespace MegaChatRoom.API.Hubs
{
    public class ChatHub : Hub
    {
        private readonly IPersistenceService _persistenceService;

        public ChatHub(IPersistenceService persistenceService)
        {
            _persistenceService = persistenceService;
        }

        public async Task SendMessage(SendMessageRequest message)
        {
            await _persistenceService.SaveMessage(message);
            await Clients.All.SendAsync("messageReceived", message);
        }
    }
}
