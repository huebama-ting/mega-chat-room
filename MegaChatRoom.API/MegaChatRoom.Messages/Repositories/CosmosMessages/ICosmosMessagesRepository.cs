using MegaChatRoom.Messages.Repositories.Repositories.Base;

namespace MegaChatRoom.Messages.Repositories.Repositories.CosmosMessages
{
    public interface ICosmosMessagesRepository : IRepository
    {
        Task<Message> GetAsync(Guid id);
        Task<IEnumerable<Message>> GetMultipleAsync(string timestamp);
        Task SaveAsync(Message message);
    }
}
