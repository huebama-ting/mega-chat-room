using MegaChatRoom.Messages.Repositories.Configuration;
using MegaChatRoom.Messages.Repositories.CosmosMessages;
using MegaChatRoom.Messages.Repositories.Factories.Base;
using Microsoft.Extensions.Options;

namespace MegaChatRoom.Messages.Repositories.Factories.CosmosMessages
{
    public class CosmosMessagesFactory : RepositoryFactory<ICosmosMessagesRepository>, ICosmosMessagesFactory<ICosmosMessagesRepository>
    {
        public CosmosMessagesFactory(IOptions<MessagesConfiguration> options) : base(options)
        {

        }

        public override string DatabaseName => "mega_chat_room";
        public override string ContainerName => "messages";
        public override string PartitionKeyPath => "/id";

        protected override ICosmosMessagesRepository CreateRepository()
        {
            return new CosmosMessagesRepository(_container);
        }
    }
}
