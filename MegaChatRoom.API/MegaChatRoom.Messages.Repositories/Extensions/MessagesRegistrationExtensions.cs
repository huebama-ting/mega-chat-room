#nullable disable

using MegaChatRoom.Messages.Repositories.Configuration;
using MegaChatRoom.Messages.Repositories.Factories.Base;
using MegaChatRoom.Messages.Repositories.Factories.Cosmos;
using MegaChatRoom.Messages.Repositories.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace MegaChatRoom.Messages.Repositories.Extensions
{
    public static class MessagesRegistrationExtensions
    {
        public static IServiceCollection AddMessagesConfig(this IServiceCollection services)
        {
            services.AddSingleton<IRepositoryFactory<IMessagesRepository>>((provider) =>
            {
                var options = provider.GetService<IOptions<MessagesConfiguration>>();

                return new CosmosMessagesFactory(options);
            });

            return services;
        }
    }
}

#nullable restore
