using MegaChatRoom.Messages.Repositories.Configuration;
using MegaChatRoom.Messages.Repositories.Cosmos;
using MegaChatRoom.Messages.Repositories.Factories.Base;
using MegaChatRoom.Messages.Repositories.Interfaces;
using Microsoft.Extensions.Options;

namespace MegaChatRoom.Messages.Repositories.Factories.Cosmos
{
    public class CosmosMessagesFactory : RepositoryFactory<IMessagesRepository>
    {
        public CosmosMessagesFactory(IOptions<MessagesConfiguration> options) : base(options)
        {

        }

        public override string DatabaseName => "mega_chat_room";
        public override string ContainerName => "messages";
        public override string PartitionKeyPath => "/id";

        protected override IMessagesRepository CreateRepository()
        {
            return new CosmosMessagesRepository(_container);
        }
    }
}
