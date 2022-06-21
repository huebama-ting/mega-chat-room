using MegaChatRoom.Messages.Factories.Base;
using MegaChatRoom.Messages.Repositories.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MegaChatRoom.Messages.Factories.MessageCache
{
    public interface IMessageCacheFactory<T> : IBaseRepositoryFactory<T> where T : IRepository
    {
    }
}
