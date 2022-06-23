#nullable disable

using MegaChatRoom.Messages.Configuration;
using MegaChatRoom.Messages.Factories.MessageCache;
using MegaChatRoom.Messages.Repositories.MessageCache;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace MegaChatRoom.Messages.Extensions
{
    public static class MessagesRegistrationExtensions
    {
        public static IServiceCollection AddMessagesConfig(this IServiceCollection services)
        {
            services.AddSingleton<IMessageCacheFactory<IMessageCache>>((provider) =>
            {
                var options = provider.GetService<IOptions<MessagesConfiguration>>();

                return new MessageCacheFactory(options);
            });

            return services;
        }
    }
}

#nullable restore
