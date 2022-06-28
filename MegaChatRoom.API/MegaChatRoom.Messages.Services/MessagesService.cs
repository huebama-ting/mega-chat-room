using AutoMapper;
using MegaChatRoom.Messages.Repositories;
using MegaChatRoom.Messages.Repositories.CosmosMessages;
using MegaChatRoom.Messages.Repositories.Factories.CosmosMessages;
using MegaChatRoom.Messages.Services.Interfaces;
using MegaChatRoom.Messages.Services.Models;

namespace MegaChatRoom.Messages.Services
{
    public class MessagesService : IMessagesService
    {
        private readonly ICosmosMessagesFactory<ICosmosMessagesRepository> _messageCacheFactory;
        private readonly IMapper _mapper;

        public MessagesService(ICosmosMessagesFactory<ICosmosMessagesRepository> factory, IMapper mapper)
        {
            _messageCacheFactory = factory;
            _mapper = mapper;
        }

        public async Task<IEnumerable<MessageModel>> GetAsync(string timestamp)
        {
            var repository = await _messageCacheFactory.CreateAsync();
            var results = _mapper.Map<List<MessageModel>>(await repository.GetMultipleAsync(timestamp));

            return results;
        }

        public async Task SaveAsync(MessageModel message)
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
