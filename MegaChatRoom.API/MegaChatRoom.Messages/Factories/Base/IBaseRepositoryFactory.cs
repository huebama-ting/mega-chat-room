using MegaChatRoom.Messages.Repositories.Repositories.Base;

namespace MegaChatRoom.Messages.Repositories.Factories.Base
{
    public interface IBaseRepositoryFactory<T> where T : IRepository
    {
        Task<T> CreateAsync();
    }
}
