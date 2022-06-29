using MegaChatRoom.Messages.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace MegaChatRoom.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class MessagesController : ControllerBase
    {
        private readonly IMessagesService _persistenceService;

        public MessagesController(IMessagesService persistenceService)
        {
            _persistenceService = persistenceService;
        }

        [HttpGet]
        public async Task<IActionResult> Messages(DateTime timestamp)
        {
            var messages = await _persistenceService.GetAsync(timestamp);

            return Ok(messages);
        }
    }
}
