using MegaChatRoom.Messages.Repositories.Base;

namespace MegaChatRoom.Messages.Repositories.Factories.Base
{
    public interface IRepositoryFactory<T> where T : IRepository
    {
        Task<T> CreateAsync();
    }
}
