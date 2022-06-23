using MegaChatRoom.API.Services;
using MegaChatRoom.API.Services.Interfaces;

namespace MegaChatRoom.API.Extensions
{
    public static class ApiRegistrationExtensions
    {
        public static IServiceCollection AddApiServices(this IServiceCollection services)
        {
            services.AddSingleton<IPersistenceService, PersistenceService>();

            return services;
        }
    }
}
