﻿#nullable disable

using MegaChatRoom;

namespace MegaChatRoom.Messages.Services.Models
{
    public class MessageModel
    {
        public string Message { get; set; }
        public DateTime Timestamp { get; set; }
        public string Username { get; set; }
    }
}

#nullable restore
