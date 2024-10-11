﻿using AutoMapper;
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
        }

    }
}
