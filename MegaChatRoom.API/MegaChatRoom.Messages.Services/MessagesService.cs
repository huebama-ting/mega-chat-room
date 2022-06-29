using AutoMapper;
using MegaChatRoom.Messages.Repositories;
using MegaChatRoom.Messages.Repositories.Factories.Base;
using MegaChatRoom.Messages.Repositories.Interfaces;
using MegaChatRoom.Messages.Services.Interfaces;
using MegaChatRoom.Messages.Services.Models;

namespace MegaChatRoom.Messages.Services
{
    public class MessagesService : IMessagesService
    {
        private readonly IRepositoryFactory<IMessagesRepository> _messageRepositoryFactory;
        private readonly IMapper _mapper;

        public MessagesService(IRepositoryFactory<IMessagesRepository> factory, IMapper mapper)
        {
            _messageRepositoryFactory = factory;
            _mapper = mapper;
        }

        public async Task<IEnumerable<MessageModel>> GetAsync(DateTime timestamp)
        {
            var repository = await _messageRepositoryFactory.CreateAsync();
            var results = _mapper.Map<List<MessageModel>>(await repository.GetMultipleAsync(timestamp));

            return results;
        }

        public async Task SaveAsync(MessageModel message)
        {
            var repository = await _messageRepositoryFactory.CreateAsync();

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
