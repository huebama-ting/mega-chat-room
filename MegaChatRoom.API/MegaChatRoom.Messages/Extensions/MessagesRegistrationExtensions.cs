#nullable disable

using MegaChatRoom.Messages.Configuration;
using MegaChatRoom.Messages.Repositories.Factories.CosmosMessages;
using MegaChatRoom.Messages.Repositories.Repositories.CosmosMessages;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace MegaChatRoom.Messages.Extensions
{
    public static class MessagesRegistrationExtensions
    {
        public static IServiceCollection AddMessagesConfig(this IServiceCollection services)
        {
            services.AddSingleton<ICosmosMessagesFactory<ICosmosMessagesRepository>>((provider) =>
            {
                var options = provider.GetService<IOptions<MessagesConfiguration>>();

                return new CosmosMessagesFactory(options);
            });

            return services;
        }
    }
}

#nullable restore
