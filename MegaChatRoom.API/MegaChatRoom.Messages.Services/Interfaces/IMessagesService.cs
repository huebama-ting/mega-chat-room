﻿using MegaChatRoom.Messages.Services.Models;

namespace MegaChatRoom.Messages.Services.Interfaces
{
    public interface IMessagesService
    {
        public Task<IEnumerable<MessageModel>> GetAsync(DateTime timestamp);
        public Task SaveAsync(MessageModel message);
    }
}
