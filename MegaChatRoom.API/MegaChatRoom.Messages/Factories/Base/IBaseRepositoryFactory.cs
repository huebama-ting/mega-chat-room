using MegaChatRoom.Messages.Repositories.Base;

namespace MegaChatRoom.Messages.Factories.Base
{
    public interface IBaseRepositoryFactory<T> where T : IRepository
    {
        Task<T> CreateAsync();
    }
}
