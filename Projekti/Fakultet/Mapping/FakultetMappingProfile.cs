using AutoMapper;
using Fakultet.Models;
using Fakultet.Models.DTO;
using System.Text.RegularExpressions;
namespace Fakultet.Mapping
{
    public class FakultetMappingProfile : Profile
    {

        public FakultetMappingProfile()
        {
            CreateMap<Smjer, SmjerDTORead>();
            CreateMap<SmjerDTOInsertUpdate, Smjer>();

            CreateMap<Student, StudentDTORead>()
                .ConstructUsing(entitet =>
               new StudentDTORead(
                  entitet.Sifra,
                  entitet.Smjer.Naziv,
                  entitet.Ime ?? "",
                  entitet.Prezime ?? "",
                  entitet.Oib,
                  PutanjaDatoteke(entitet))); 

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

            CreateMap<IspitniRok, GrafIspitniRokDTO>()
            .ConstructUsing(entitet =>
             new GrafIspitniRokDTO(
                entitet.Datum,
                entitet.Pristupnici == null ? 0 : entitet.Pristupnici.Count()));
        }

        private static string? PutanjaDatoteke(Student e)
        {
            try
            {
                var ds = Path.DirectorySeparatorChar;
                string slika = Path.Combine(Directory.GetCurrentDirectory()
                    + ds + "wwwroot" + ds + "slike" + ds + "studenti" + ds + e.Sifra + ".jpg");
                return File.Exists(slika) ? "/slike/studenti/" + e.Sifra + ".jpg" : null;
            }
            catch
            {
                return null;
            }
        }
    }
}
