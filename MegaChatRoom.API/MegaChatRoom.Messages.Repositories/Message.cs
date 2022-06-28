#nullable disable

namespace MegaChatRoom.Messages.Repositories
{
    public class Message
    {
        public Guid Id { get; set; }
        public string MessageContent { get; set; }
        public DateTime Timestamp { get; set; }
        public string Username { get; set; }
    }
}

#nullable restore
