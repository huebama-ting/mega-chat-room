using MegaChatRoom.Messages.Repositories.Base;

namespace MegaChatRoom.Messages.Repositories.MessageCache
{
    public interface IMessageCache : IRepository
    {
        Task<Message> GetAsync(Guid id);
        Task<IEnumerable<Message>> GetMultipleAsync(string timestamp);
        Task SaveAsync(Message message);
    }
}
