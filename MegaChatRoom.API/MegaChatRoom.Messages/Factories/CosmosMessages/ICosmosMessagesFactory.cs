using MegaChatRoom.Messages.Repositories.Factories.Base;
using MegaChatRoom.Messages.Repositories.Repositories.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MegaChatRoom.Messages.Repositories.Factories.CosmosMessages
{
    public interface ICosmosMessagesFactory<T> : IBaseRepositoryFactory<T> where T : IRepository
    {
    }
}
