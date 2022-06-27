using MegaChatRoom.API.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace MegaChatRoom.API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class MessagesController : ControllerBase
    {
        private readonly IPersistenceService _persistenceService;

        public MessagesController(IPersistenceService persistenceService)
        {
            _persistenceService = persistenceService;
        }

        [HttpGet]
        public async Task<IActionResult> Messages(string timestamp)
        {
            var messages = await _persistenceService.GetMessages(timestamp);

            return Ok(messages);
        }
    }
}
