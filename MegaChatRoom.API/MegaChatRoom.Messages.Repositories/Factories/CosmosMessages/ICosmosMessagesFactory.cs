using MegaChatRoom.Messages.Repositories.Base;
using MegaChatRoom.Messages.Repositories.Factories.Base;

namespace MegaChatRoom.Messages.Repositories.Factories.CosmosMessages
{
    public interface ICosmosMessagesFactory<T> : IRepositoryFactory<T> where T : IRepository
    {
    }
}
