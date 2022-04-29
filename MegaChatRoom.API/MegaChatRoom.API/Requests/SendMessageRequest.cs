#nullable disable
namespace MegaChatRoom.API.Requests
{
    public class SendMessageRequest
    {
        public string Message { get; set; }
        public string Timestamp { get; set; }
        public string Username { get; set; }
    }
}
#nullable restore
