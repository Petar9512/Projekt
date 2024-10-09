using AutoMapper;
using Fakultet.Models;
using Fakultet.Models.DTO;
namespace Fakultet.Mapping
{
    public class FakultetMappingProfile : Profile
    {

        public FakultetMappingProfile()
        {
            CreateMap<Smjer, SmjerDTORead>();
            CreateMap<SmjerDTOInsertUpdate, Smjer>();

            CreateMap<Student, StudentDTORead>();
            CreateMap<StudentDTOInsertUpdate, Student>();
        }

    }
}
