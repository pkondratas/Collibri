using AutoMapper;
using Collibri.Dtos;
using Collibri.Models;
using FileInfo = Collibri.Models.FileInfo;

namespace Collibri.Repositories.DbImplementation.Mapper
{
    public class AutoMapper : Profile
    {
        public AutoMapper()
        {
            CreateMap<Note, NoteDTO>().ReverseMap();
            CreateMap<Post, PostDTO>().ReverseMap();
            CreateMap<Room, RoomDTO>().ReverseMap();
            CreateMap<Section, SectionDTO>().ReverseMap();
            CreateMap<Document, DocumentDTO>().ReverseMap();
            CreateMap<FileInfo, FileInfoDTO>().ReverseMap();
        }
    }
}