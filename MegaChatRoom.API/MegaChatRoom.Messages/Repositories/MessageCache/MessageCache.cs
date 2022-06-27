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

        public async Task<IEnumerable<Message>> GetMultipleAsync(string timestamp)
        {
            var messages = new List<Message>();
            using FeedIterator<Message> feed = _container.GetItemQueryIterator<Message>(
                queryText: $"SELECT TOP 10 * FROM c WHERE c.timestamp < \"{timestamp}\" ORDER BY c.timestamp DESC");

            while (feed.HasMoreResults)
            {
                var response = await feed.ReadNextAsync();

                foreach (var item in response)
                {
                    messages.Insert(0, item);
                }
            }

            return messages;
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
