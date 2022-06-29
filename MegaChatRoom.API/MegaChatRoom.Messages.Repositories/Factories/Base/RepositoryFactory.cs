#nullable disable

using MegaChatRoom.Messages.Repositories.Base;
using MegaChatRoom.Messages.Repositories.Configuration;
using MegaChatRoom.Messages.Repositories.Serializers;
using Microsoft.Azure.Cosmos;
using Microsoft.Extensions.Options;
using System.Text.Json;

namespace MegaChatRoom.Messages.Repositories.Factories.Base
{
    public abstract class RepositoryFactory<T> : IRepositoryFactory<T> where T : IRepository
    {
        private readonly IOptions<MessagesConfiguration> _options;
        private string _uri { get; set; }
        private string _dbKey { get; set; }
        private CosmosClient _cosmosClient { get; set; }
        private T _repository { get; set; }

        protected Container _container { get; set; }
        protected Database _database { get; set; }

        public abstract string DatabaseName { get; }
        public abstract string ContainerName { get; }
        public abstract string PartitionKeyPath { get; }

        protected abstract T CreateRepository();

        protected RepositoryFactory(IOptions<MessagesConfiguration> options)
        {
            _options = options;
        }

        public async Task<T> CreateAsync()
        {
            _uri = _options.Value.Uri;
            _dbKey = _options.Value.DbKey;
            _repository ??= await CreateNewRepositoryAsync();
            
            return _repository;
        }

        private async Task<T> CreateNewRepositoryAsync()
        {
            await ConnectToDatabaseAsync();

            return CreateRepository();
        }

        private async Task ConnectToDatabaseAsync()
        {
            var clientOptions = new CosmosClientOptions()
            {
                SerializerOptions = new CosmosSerializationOptions()
                {
                    PropertyNamingPolicy = CosmosPropertyNamingPolicy.CamelCase
                }
            };
            var connectionString = $"AccountEndpoint={_uri};AccountKey={_dbKey}";
            _cosmosClient = new CosmosClient(connectionString, clientOptions);
            _database ??= await _cosmosClient.CreateDatabaseIfNotExistsAsync(DatabaseName);
            _container = await _database.CreateContainerIfNotExistsAsync(new ContainerProperties(ContainerName, PartitionKeyPath));
        }
    }
}

#nullable restore
