using AutoMapper;
using MegaChatRoom.API.Requests;
using MegaChatRoom.Messages;

namespace MegaChatRoom.API.MapperProfiles
{
    public class MessagesMappingProfile : Profile
    {
        public MessagesMappingProfile()
        {
            CreateMap<Message, SendMessageRequest>()
                .ForMember((dest) => dest.Message, (opt) => opt.MapFrom((src) => src.MessageContent));
        }
    }
}
