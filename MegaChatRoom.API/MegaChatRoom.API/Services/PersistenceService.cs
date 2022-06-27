using AutoMapper;
using MegaChatRoom.API.Requests;
using MegaChatRoom.API.Services.Interfaces;
using MegaChatRoom.Messages;
using MegaChatRoom.Messages.Repositories.Factories.CosmosMessages;
using MegaChatRoom.Messages.Repositories.Repositories.CosmosMessages;

namespace MegaChatRoom.API.Services
{
    public class PersistenceService : IPersistenceService
    {
        private readonly ICosmosMessagesFactory<ICosmosMessagesRepository> _messageCacheFactory;
        private readonly IMapper _mapper;

        public PersistenceService(ICosmosMessagesFactory<ICosmosMessagesRepository> factory, IMapper mapper)
        {
            _messageCacheFactory = factory;
            _mapper = mapper;
        }

        public async Task<IEnumerable<SendMessageRequest>> GetMessages(string timestamp)
        {
            var repository = await _messageCacheFactory.CreateAsync();
            var results = _mapper.Map<List<SendMessageRequest>>(await repository.GetMultipleAsync(timestamp));

            return results;
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
