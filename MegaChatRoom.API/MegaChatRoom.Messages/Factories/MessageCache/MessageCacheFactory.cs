using MegaChatRoom.Messages.Configuration;
using MegaChatRoom.Messages.Factories.Base;
using MegaChatRoom.Messages.Repositories.MessageCache;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MegaChatRoom.Messages.Factories.MessageCache
{
    public class MessageCacheFactory : BaseRepositoryFactory<IMessageCache>, IMessageCacheFactory<IMessageCache>
    {
        public MessageCacheFactory(IOptions<MessagesConfiguration> options) : base(options)
        {

        }

        public override string DatabaseName => "mega_chat_room";
        public override string ContainerName => "messages";
        public override string PartitionKeyPath => "/id";

        protected override IMessageCache CreateRepository()
        {
            return new Repositories.MessageCache.MessageCache(_container);
        }
    }
}
