using MegaChatRoom.Messages.Configuration;
using MegaChatRoom.Messages.Repositories.Factories.Base;
using MegaChatRoom.Messages.Repositories.Repositories.CosmosMessages;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MegaChatRoom.Messages.Repositories.Factories.CosmosMessages
{ 
    public class CosmosMessagesFactory : BaseRepositoryFactory<ICosmosMessagesRepository>, ICosmosMessagesFactory<ICosmosMessagesRepository>
    {
        public CosmosMessagesFactory(IOptions<MessagesConfiguration> options) : base(options)
        {

        }

        public override string DatabaseName => "mega_chat_room";
        public override string ContainerName => "messages";
        public override string PartitionKeyPath => "/id";

        protected override ICosmosMessagesRepository CreateRepository()
        {
            return new Repositories.CosmosMessages.CosmosMessagesRepository(_container);
        }
    }
}
