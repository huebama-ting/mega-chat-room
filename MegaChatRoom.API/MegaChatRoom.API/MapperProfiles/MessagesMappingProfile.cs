using AutoMapper;
using MegaChatRoom.Messages.Repositories;
using MegaChatRoom.Messages.Services.Models;

namespace MegaChatRoom.API.MapperProfiles
{
    public class MessagesMappingProfile : Profile
    {
        public MessagesMappingProfile()
        {
            CreateMap<Message, MessageModel>()
                .ForMember((dest) => dest.Message, (opt) => opt.MapFrom((src) => src.MessageContent));
        }
    }
}
