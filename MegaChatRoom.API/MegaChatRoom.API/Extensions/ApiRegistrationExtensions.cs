using MegaChatRoom.Messages.Services;
using MegaChatRoom.Messages.Services.Interfaces;

namespace MegaChatRoom.API.Extensions
{
    public static class ApiRegistrationExtensions
    {
        public static IServiceCollection AddApiServices(this IServiceCollection services)
        {
            services.AddSingleton<IMessagesService, MessagesService>();

            return services;
        }
    }
}
