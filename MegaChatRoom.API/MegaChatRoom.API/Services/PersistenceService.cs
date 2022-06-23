using MegaChatRoom.API.Requests;
using MegaChatRoom.API.Services.Interfaces;
using MegaChatRoom.Messages;
using MegaChatRoom.Messages.Factories.MessageCache;
using MegaChatRoom.Messages.Repositories.MessageCache;

namespace MegaChatRoom.API.Services
{
    public class PersistenceService : IPersistenceService
    {
        private readonly IMessageCacheFactory<IMessageCache> _messageCacheFactory;

        public PersistenceService(IMessageCacheFactory<IMessageCache> factory)
        {
            _messageCacheFactory = factory;
        }

        public Task<IEnumerable<SendMessageRequest>> GetMessages()
        {
            throw new NotImplementedException();
        }

        public async Task SaveMessage(SendMessageRequest message)
        {
            var repository = await _messageCacheFactory.CreateAsync();

            await repository.SaveAsync(new Message()
            {
                Id = Guid.NewGuid(),
                MessageContent = message.Message,
                Username = message.Username,
                Timestamp = message.Timestamp
            });
        }
    }
}
