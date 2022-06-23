using Microsoft.Azure.Cosmos;

namespace MegaChatRoom.Messages.Repositories.MessageCache
{
    public class MessageCache : IMessageCache
    {
        private readonly Container _container;

        public MessageCache(Container container)
        {
            _container = container;
        }

        public Task<Message> GetAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task SaveAsync(Message message)
        {
            try
            {
                await _container.UpsertItemAsync(message, new PartitionKey(message.Id.ToString()));
            }
            catch (CosmosException e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
