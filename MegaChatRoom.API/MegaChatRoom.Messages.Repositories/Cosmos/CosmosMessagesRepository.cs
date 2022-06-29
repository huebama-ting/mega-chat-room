using MegaChatRoom.Messages.Repositories.Interfaces;
using Microsoft.Azure.Cosmos;
using Microsoft.Azure.Cosmos.Linq;

namespace MegaChatRoom.Messages.Repositories.Cosmos
{
    public class CosmosMessagesRepository : IMessagesRepository
    {
        private const int MAX_RESULTS = 10;
        private readonly Container _container;

        public CosmosMessagesRepository(Container container)
        {
            _container = container;
        }

        public Task<Message> GetAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Message>> GetMultipleAsync(DateTime timestamp)
        {
            var messages = new List<Message>();
            using FeedIterator<Message> feed = _container.GetItemLinqQueryable<Message>()
                .Where((message) => message.Timestamp < timestamp)
                .OrderByDescending((message) => message.Timestamp)
                .Take(MAX_RESULTS)
                .ToFeedIterator();

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
