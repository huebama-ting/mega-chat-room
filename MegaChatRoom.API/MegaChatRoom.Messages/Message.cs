#nullable disable

using System.Text.Json.Serialization;

namespace MegaChatRoom.Messages
{
    public class Message
    {
        public Guid Id { get; set; }
        public string MessageContent { get; set; }
        public string Timestamp { get; set; }
        public string Username { get; set; }
    }
}

#nullable restore
