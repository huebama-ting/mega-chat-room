using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MegaChatRoom.Messages.Repositories.MessageCache
{
    public interface IMessageCache
    {
        Task<Message> GetAsync(Guid id);
        Task SaveAsync(Message message);
    }
}
