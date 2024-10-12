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

            CreateMap<Student, StudentDTORead>()
                .ForCtorParam(
                "SmjerNaziv",
                opt => opt.MapFrom(src => src.Smjer.Naziv));

            CreateMap<Student, StudentDTOInsertUpdate>().ForMember(
                dest => dest.SmjerSifra,
                opt => opt.MapFrom(src => src.Smjer.Sifra));

            CreateMap<StudentDTOInsertUpdate, Student>();

            CreateMap<Kolegij, KolegijDTORead>()
                .ForCtorParam(
                "SmjerNaziv",
                opt => opt.MapFrom(src => src.Smjer.Naziv));

            CreateMap<Kolegij, KolegijDTOInsertUpdate>().ForMember(
                dest => dest.SmjerSifra,
                opt => opt.MapFrom(src => src.Smjer.Sifra));

            CreateMap<KolegijDTOInsertUpdate, Kolegij>();

            CreateMap<IspitniRok, IspitniRokDTORead>()
                .ForCtorParam(
                "KolegijNaziv",
                opt => opt.MapFrom(src => src.Kolegij.Naziv));

            CreateMap<IspitniRok, IspitniRokDTOInsertUpdate>().ForMember(
                dest => dest.KolegijSifra,
                opt => opt.MapFrom(src => src.Kolegij.Sifra));

            CreateMap<IspitniRokDTOInsertUpdate, IspitniRok>();
        }
    }
}
