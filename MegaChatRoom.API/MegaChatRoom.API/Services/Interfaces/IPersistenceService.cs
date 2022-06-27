using MegaChatRoom.API.Requests;

namespace MegaChatRoom.API.Services.Interfaces
{
    public interface IPersistenceService
    {
        public Task<IEnumerable<SendMessageRequest>> GetMessages(string timestamp);
        public Task SaveMessage(SendMessageRequest message);
    }
}
