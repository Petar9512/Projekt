<a name='assembly'></a>
# Fakultet

## Contents

- [AutorizacijaController](#T-Fakultet-Controllers-AutorizacijaController 'Fakultet.Controllers.AutorizacijaController')
  - [#ctor(context)](#M-Fakultet-Controllers-AutorizacijaController-#ctor-Fakultet-Data-FakultetContext- 'Fakultet.Controllers.AutorizacijaController.#ctor(Fakultet.Data.FakultetContext)')
  - [_context](#F-Fakultet-Controllers-AutorizacijaController-_context 'Fakultet.Controllers.AutorizacijaController._context')
  - [GenerirajToken(operater)](#M-Fakultet-Controllers-AutorizacijaController-GenerirajToken-Fakultet-Models-DTO-OperaterDTO- 'Fakultet.Controllers.AutorizacijaController.GenerirajToken(Fakultet.Models.DTO.OperaterDTO)')
- [Entitet](#T-Fakultet-Models-Entitet 'Fakultet.Models.Entitet')
  - [Sifra](#P-Fakultet-Models-Entitet-Sifra 'Fakultet.Models.Entitet.Sifra')
- [FakultetContext](#T-Fakultet-Data-FakultetContext 'Fakultet.Data.FakultetContext')
  - [#ctor(options)](#M-Fakultet-Data-FakultetContext-#ctor-Microsoft-EntityFrameworkCore-DbContextOptions{Fakultet-Data-FakultetContext}- 'Fakultet.Data.FakultetContext.#ctor(Microsoft.EntityFrameworkCore.DbContextOptions{Fakultet.Data.FakultetContext})')
  - [IspitniRok](#P-Fakultet-Data-FakultetContext-IspitniRok 'Fakultet.Data.FakultetContext.IspitniRok')
  - [Kolegiji](#P-Fakultet-Data-FakultetContext-Kolegiji 'Fakultet.Data.FakultetContext.Kolegiji')
  - [Operateri](#P-Fakultet-Data-FakultetContext-Operateri 'Fakultet.Data.FakultetContext.Operateri')
  - [Smjerovi](#P-Fakultet-Data-FakultetContext-Smjerovi 'Fakultet.Data.FakultetContext.Smjerovi')
  - [Studenti](#P-Fakultet-Data-FakultetContext-Studenti 'Fakultet.Data.FakultetContext.Studenti')
  - [OnModelCreating(modelBuilder)](#M-Fakultet-Data-FakultetContext-OnModelCreating-Microsoft-EntityFrameworkCore-ModelBuilder- 'Fakultet.Data.FakultetContext.OnModelCreating(Microsoft.EntityFrameworkCore.ModelBuilder)')
- [FakultetController](#T-Fakultet-Controllers-FakultetController 'Fakultet.Controllers.FakultetController')
  - [#ctor(context,mapper)](#M-Fakultet-Controllers-FakultetController-#ctor-Fakultet-Data-FakultetContext,AutoMapper-IMapper- 'Fakultet.Controllers.FakultetController.#ctor(Fakultet.Data.FakultetContext,AutoMapper.IMapper)')
  - [_context](#F-Fakultet-Controllers-FakultetController-_context 'Fakultet.Controllers.FakultetController._context')
  - [_mapper](#F-Fakultet-Controllers-FakultetController-_mapper 'Fakultet.Controllers.FakultetController._mapper')
- [FakultetExtensions](#T-Fakultet-Extensions-FakultetExtensions 'Fakultet.Extensions.FakultetExtensions')
  - [AddFakultetCORS(Services)](#M-Fakultet-Extensions-FakultetExtensions-AddFakultetCORS-Microsoft-Extensions-DependencyInjection-IServiceCollection- 'Fakultet.Extensions.FakultetExtensions.AddFakultetCORS(Microsoft.Extensions.DependencyInjection.IServiceCollection)')
  - [AddFakultetSecurity(Services)](#M-Fakultet-Extensions-FakultetExtensions-AddFakultetSecurity-Microsoft-Extensions-DependencyInjection-IServiceCollection- 'Fakultet.Extensions.FakultetExtensions.AddFakultetSecurity(Microsoft.Extensions.DependencyInjection.IServiceCollection)')
  - [AddFakultetSwaggerGen(Services)](#M-Fakultet-Extensions-FakultetExtensions-AddFakultetSwaggerGen-Microsoft-Extensions-DependencyInjection-IServiceCollection- 'Fakultet.Extensions.FakultetExtensions.AddFakultetSwaggerGen(Microsoft.Extensions.DependencyInjection.IServiceCollection)')
- [FakultetMappingProfile](#T-Fakultet-Mapping-FakultetMappingProfile 'Fakultet.Mapping.FakultetMappingProfile')
  - [#ctor()](#M-Fakultet-Mapping-FakultetMappingProfile-#ctor 'Fakultet.Mapping.FakultetMappingProfile.#ctor')
  - [PutanjaDatoteke(e)](#M-Fakultet-Mapping-FakultetMappingProfile-PutanjaDatoteke-Fakultet-Models-Student- 'Fakultet.Mapping.FakultetMappingProfile.PutanjaDatoteke(Fakultet.Models.Student)')
- [GrafIspitniRokDTO](#T-Fakultet-Models-DTO-GrafIspitniRokDTO 'Fakultet.Models.DTO.GrafIspitniRokDTO')
  - [#ctor()](#M-Fakultet-Models-DTO-GrafIspitniRokDTO-#ctor-System-String,System-Int32- 'Fakultet.Models.DTO.GrafIspitniRokDTO.#ctor(System.String,System.Int32)')
- [IspitniRok](#T-Fakultet-Models-IspitniRok 'Fakultet.Models.IspitniRok')
  - [Datum](#P-Fakultet-Models-IspitniRok-Datum 'Fakultet.Models.IspitniRok.Datum')
  - [Kolegij](#P-Fakultet-Models-IspitniRok-Kolegij 'Fakultet.Models.IspitniRok.Kolegij')
  - [Pristupnici](#P-Fakultet-Models-IspitniRok-Pristupnici 'Fakultet.Models.IspitniRok.Pristupnici')
  - [VrstaIspita](#P-Fakultet-Models-IspitniRok-VrstaIspita 'Fakultet.Models.IspitniRok.VrstaIspita')
- [IspitniRokController](#T-Fakultet-Controllers-IspitniRokController 'Fakultet.Controllers.IspitniRokController')
  - [#ctor(context,mapper)](#M-Fakultet-Controllers-IspitniRokController-#ctor-Fakultet-Data-FakultetContext,AutoMapper-IMapper- 'Fakultet.Controllers.IspitniRokController.#ctor(Fakultet.Data.FakultetContext,AutoMapper.IMapper)')
  - [Delete(sifra)](#M-Fakultet-Controllers-IspitniRokController-Delete-System-Int32- 'Fakultet.Controllers.IspitniRokController.Delete(System.Int32)')
  - [DodajPristupnika(sifra,studentSifra)](#M-Fakultet-Controllers-IspitniRokController-DodajPristupnika-System-Int32,System-Int32- 'Fakultet.Controllers.IspitniRokController.DodajPristupnika(System.Int32,System.Int32)')
  - [Get()](#M-Fakultet-Controllers-IspitniRokController-Get 'Fakultet.Controllers.IspitniRokController.Get')
  - [GetBySifra(sifra)](#M-Fakultet-Controllers-IspitniRokController-GetBySifra-System-Int32- 'Fakultet.Controllers.IspitniRokController.GetBySifra(System.Int32)')
  - [GetPristupnici(sifraRoka)](#M-Fakultet-Controllers-IspitniRokController-GetPristupnici-System-Int32- 'Fakultet.Controllers.IspitniRokController.GetPristupnici(System.Int32)')
  - [GrafIspitnogRoka()](#M-Fakultet-Controllers-IspitniRokController-GrafIspitnogRoka 'Fakultet.Controllers.IspitniRokController.GrafIspitnogRoka')
  - [ObrisiPolaznika(sifra,studentSifra)](#M-Fakultet-Controllers-IspitniRokController-ObrisiPolaznika-System-Int32,System-Int32- 'Fakultet.Controllers.IspitniRokController.ObrisiPolaznika(System.Int32,System.Int32)')
  - [Post(dto)](#M-Fakultet-Controllers-IspitniRokController-Post-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate- 'Fakultet.Controllers.IspitniRokController.Post(Fakultet.Models.DTO.IspitniRokDTOInsertUpdate)')
  - [Put(sifra,dto)](#M-Fakultet-Controllers-IspitniRokController-Put-System-Int32,Fakultet-Models-DTO-IspitniRokDTOInsertUpdate- 'Fakultet.Controllers.IspitniRokController.Put(System.Int32,Fakultet.Models.DTO.IspitniRokDTOInsertUpdate)')
- [IspitniRokDTOInsertUpdate](#T-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate 'Fakultet.Models.DTO.IspitniRokDTOInsertUpdate')
  - [#ctor(KolegijSifra,VrstaIspita,Datum)](#M-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate-#ctor-System-Nullable{System-Int32},System-String,System-Nullable{System-DateTime}- 'Fakultet.Models.DTO.IspitniRokDTOInsertUpdate.#ctor(System.Nullable{System.Int32},System.String,System.Nullable{System.DateTime})')
  - [Datum](#P-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate-Datum 'Fakultet.Models.DTO.IspitniRokDTOInsertUpdate.Datum')
  - [KolegijSifra](#P-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate-KolegijSifra 'Fakultet.Models.DTO.IspitniRokDTOInsertUpdate.KolegijSifra')
  - [VrstaIspita](#P-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate-VrstaIspita 'Fakultet.Models.DTO.IspitniRokDTOInsertUpdate.VrstaIspita')
- [IspitniRokDTORead](#T-Fakultet-Models-DTO-IspitniRokDTORead 'Fakultet.Models.DTO.IspitniRokDTORead')
  - [#ctor(Sifra,KolegijNaziv,VrstaIspita,Datum)](#M-Fakultet-Models-DTO-IspitniRokDTORead-#ctor-System-Int32,System-String,System-String,System-Nullable{System-DateTime}- 'Fakultet.Models.DTO.IspitniRokDTORead.#ctor(System.Int32,System.String,System.String,System.Nullable{System.DateTime})')
  - [Datum](#P-Fakultet-Models-DTO-IspitniRokDTORead-Datum 'Fakultet.Models.DTO.IspitniRokDTORead.Datum')
  - [KolegijNaziv](#P-Fakultet-Models-DTO-IspitniRokDTORead-KolegijNaziv 'Fakultet.Models.DTO.IspitniRokDTORead.KolegijNaziv')
  - [Sifra](#P-Fakultet-Models-DTO-IspitniRokDTORead-Sifra 'Fakultet.Models.DTO.IspitniRokDTORead.Sifra')
  - [VrstaIspita](#P-Fakultet-Models-DTO-IspitniRokDTORead-VrstaIspita 'Fakultet.Models.DTO.IspitniRokDTORead.VrstaIspita')
- [Kolegij](#T-Fakultet-Models-Kolegij 'Fakultet.Models.Kolegij')
  - [Naziv](#P-Fakultet-Models-Kolegij-Naziv 'Fakultet.Models.Kolegij.Naziv')
  - [Obavezni](#P-Fakultet-Models-Kolegij-Obavezni 'Fakultet.Models.Kolegij.Obavezni')
  - [Predavac](#P-Fakultet-Models-Kolegij-Predavac 'Fakultet.Models.Kolegij.Predavac')
  - [Smjer](#P-Fakultet-Models-Kolegij-Smjer 'Fakultet.Models.Kolegij.Smjer')
- [KolegijController](#T-Fakultet-Controllers-KolegijController 'Fakultet.Controllers.KolegijController')
  - [#ctor(context,mapper)](#M-Fakultet-Controllers-KolegijController-#ctor-Fakultet-Data-FakultetContext,AutoMapper-IMapper- 'Fakultet.Controllers.KolegijController.#ctor(Fakultet.Data.FakultetContext,AutoMapper.IMapper)')
  - [Delete(sifra)](#M-Fakultet-Controllers-KolegijController-Delete-System-Int32- 'Fakultet.Controllers.KolegijController.Delete(System.Int32)')
  - [Get()](#M-Fakultet-Controllers-KolegijController-Get 'Fakultet.Controllers.KolegijController.Get')
  - [GetBySifra(sifra)](#M-Fakultet-Controllers-KolegijController-GetBySifra-System-Int32- 'Fakultet.Controllers.KolegijController.GetBySifra(System.Int32)')
  - [Post(dto)](#M-Fakultet-Controllers-KolegijController-Post-Fakultet-Models-DTO-KolegijDTOInsertUpdate- 'Fakultet.Controllers.KolegijController.Post(Fakultet.Models.DTO.KolegijDTOInsertUpdate)')
  - [Put(sifra,dto)](#M-Fakultet-Controllers-KolegijController-Put-System-Int32,Fakultet-Models-DTO-KolegijDTOInsertUpdate- 'Fakultet.Controllers.KolegijController.Put(System.Int32,Fakultet.Models.DTO.KolegijDTOInsertUpdate)')
- [KolegijDTOInsertUpdate](#T-Fakultet-Models-DTO-KolegijDTOInsertUpdate 'Fakultet.Models.DTO.KolegijDTOInsertUpdate')
  - [#ctor(SmjerSifra,Naziv,Predavac,Obavezni)](#M-Fakultet-Models-DTO-KolegijDTOInsertUpdate-#ctor-System-Nullable{System-Int32},System-String,System-String,System-Nullable{System-Boolean}- 'Fakultet.Models.DTO.KolegijDTOInsertUpdate.#ctor(System.Nullable{System.Int32},System.String,System.String,System.Nullable{System.Boolean})')
  - [Naziv](#P-Fakultet-Models-DTO-KolegijDTOInsertUpdate-Naziv 'Fakultet.Models.DTO.KolegijDTOInsertUpdate.Naziv')
  - [Obavezni](#P-Fakultet-Models-DTO-KolegijDTOInsertUpdate-Obavezni 'Fakultet.Models.DTO.KolegijDTOInsertUpdate.Obavezni')
  - [Predavac](#P-Fakultet-Models-DTO-KolegijDTOInsertUpdate-Predavac 'Fakultet.Models.DTO.KolegijDTOInsertUpdate.Predavac')
  - [SmjerSifra](#P-Fakultet-Models-DTO-KolegijDTOInsertUpdate-SmjerSifra 'Fakultet.Models.DTO.KolegijDTOInsertUpdate.SmjerSifra')
- [KolegijDTORead](#T-Fakultet-Models-DTO-KolegijDTORead 'Fakultet.Models.DTO.KolegijDTORead')
  - [#ctor(Sifra,SmjerNaziv,Naziv,Predavac,Obavezni)](#M-Fakultet-Models-DTO-KolegijDTORead-#ctor-System-Int32,System-String,System-String,System-String,System-Nullable{System-Boolean}- 'Fakultet.Models.DTO.KolegijDTORead.#ctor(System.Int32,System.String,System.String,System.String,System.Nullable{System.Boolean})')
  - [Naziv](#P-Fakultet-Models-DTO-KolegijDTORead-Naziv 'Fakultet.Models.DTO.KolegijDTORead.Naziv')
  - [Obavezni](#P-Fakultet-Models-DTO-KolegijDTORead-Obavezni 'Fakultet.Models.DTO.KolegijDTORead.Obavezni')
  - [Predavac](#P-Fakultet-Models-DTO-KolegijDTORead-Predavac 'Fakultet.Models.DTO.KolegijDTORead.Predavac')
  - [Sifra](#P-Fakultet-Models-DTO-KolegijDTORead-Sifra 'Fakultet.Models.DTO.KolegijDTORead.Sifra')
  - [SmjerNaziv](#P-Fakultet-Models-DTO-KolegijDTORead-SmjerNaziv 'Fakultet.Models.DTO.KolegijDTORead.SmjerNaziv')
- [Operater](#T-Fakultet-Models-Operater 'Fakultet.Models.Operater')
  - [Email](#P-Fakultet-Models-Operater-Email 'Fakultet.Models.Operater.Email')
  - [Lozinka](#P-Fakultet-Models-Operater-Lozinka 'Fakultet.Models.Operater.Lozinka')
- [OperaterDTO](#T-Fakultet-Models-DTO-OperaterDTO 'Fakultet.Models.DTO.OperaterDTO')
  - [#ctor(email,password)](#M-Fakultet-Models-DTO-OperaterDTO-#ctor-System-String,System-String- 'Fakultet.Models.DTO.OperaterDTO.#ctor(System.String,System.String)')
  - [email](#P-Fakultet-Models-DTO-OperaterDTO-email 'Fakultet.Models.DTO.OperaterDTO.email')
  - [password](#P-Fakultet-Models-DTO-OperaterDTO-password 'Fakultet.Models.DTO.OperaterDTO.password')
- [PocetnaController](#T-Fakultet-Controllers-PocetnaController 'Fakultet.Controllers.PocetnaController')
  - [#ctor(_context,_mapper)](#M-Fakultet-Controllers-PocetnaController-#ctor-Fakultet-Data-FakultetContext,AutoMapper-IMapper- 'Fakultet.Controllers.PocetnaController.#ctor(Fakultet.Data.FakultetContext,AutoMapper.IMapper)')
  - [DostupniRokovi()](#M-Fakultet-Controllers-PocetnaController-DostupniRokovi 'Fakultet.Controllers.PocetnaController.DostupniRokovi')
  - [UkupnoStudenata()](#M-Fakultet-Controllers-PocetnaController-UkupnoStudenata 'Fakultet.Controllers.PocetnaController.UkupnoStudenata')
- [SlikaDTO](#T-Fakultet-Models-DTO-SlikaDTO 'Fakultet.Models.DTO.SlikaDTO')
  - [#ctor(Base64)](#M-Fakultet-Models-DTO-SlikaDTO-#ctor-System-String- 'Fakultet.Models.DTO.SlikaDTO.#ctor(System.String)')
  - [Base64](#P-Fakultet-Models-DTO-SlikaDTO-Base64 'Fakultet.Models.DTO.SlikaDTO.Base64')
- [Smjer](#T-Fakultet-Models-Smjer 'Fakultet.Models.Smjer')
  - [BrojStudenata](#P-Fakultet-Models-Smjer-BrojStudenata 'Fakultet.Models.Smjer.BrojStudenata')
  - [Naziv](#P-Fakultet-Models-Smjer-Naziv 'Fakultet.Models.Smjer.Naziv')
- [SmjerController](#T-Fakultet-Controllers-SmjerController 'Fakultet.Controllers.SmjerController')
  - [#ctor(context,mapper)](#M-Fakultet-Controllers-SmjerController-#ctor-Fakultet-Data-FakultetContext,AutoMapper-IMapper- 'Fakultet.Controllers.SmjerController.#ctor(Fakultet.Data.FakultetContext,AutoMapper.IMapper)')
  - [Delete(sifra)](#M-Fakultet-Controllers-SmjerController-Delete-System-Int32- 'Fakultet.Controllers.SmjerController.Delete(System.Int32)')
  - [Get()](#M-Fakultet-Controllers-SmjerController-Get 'Fakultet.Controllers.SmjerController.Get')
  - [GetBySifra(sifra)](#M-Fakultet-Controllers-SmjerController-GetBySifra-System-Int32- 'Fakultet.Controllers.SmjerController.GetBySifra(System.Int32)')
  - [Post(dto)](#M-Fakultet-Controllers-SmjerController-Post-Fakultet-Models-DTO-SmjerDTOInsertUpdate- 'Fakultet.Controllers.SmjerController.Post(Fakultet.Models.DTO.SmjerDTOInsertUpdate)')
  - [Put(sifra,dto)](#M-Fakultet-Controllers-SmjerController-Put-System-Int32,Fakultet-Models-DTO-SmjerDTOInsertUpdate- 'Fakultet.Controllers.SmjerController.Put(System.Int32,Fakultet.Models.DTO.SmjerDTOInsertUpdate)')
- [SmjerDTOInsertUpdate](#T-Fakultet-Models-DTO-SmjerDTOInsertUpdate 'Fakultet.Models.DTO.SmjerDTOInsertUpdate')
  - [#ctor(Naziv,brojStudenata)](#M-Fakultet-Models-DTO-SmjerDTOInsertUpdate-#ctor-System-String,System-Nullable{System-Int32}- 'Fakultet.Models.DTO.SmjerDTOInsertUpdate.#ctor(System.String,System.Nullable{System.Int32})')
  - [Naziv](#P-Fakultet-Models-DTO-SmjerDTOInsertUpdate-Naziv 'Fakultet.Models.DTO.SmjerDTOInsertUpdate.Naziv')
  - [brojStudenata](#P-Fakultet-Models-DTO-SmjerDTOInsertUpdate-brojStudenata 'Fakultet.Models.DTO.SmjerDTOInsertUpdate.brojStudenata')
- [SmjerDTORead](#T-Fakultet-Models-DTO-SmjerDTORead 'Fakultet.Models.DTO.SmjerDTORead')
  - [#ctor(Sifra,Naziv,brojStudenata)](#M-Fakultet-Models-DTO-SmjerDTORead-#ctor-System-Int32,System-String,System-Nullable{System-Int32}- 'Fakultet.Models.DTO.SmjerDTORead.#ctor(System.Int32,System.String,System.Nullable{System.Int32})')
  - [Naziv](#P-Fakultet-Models-DTO-SmjerDTORead-Naziv 'Fakultet.Models.DTO.SmjerDTORead.Naziv')
  - [Sifra](#P-Fakultet-Models-DTO-SmjerDTORead-Sifra 'Fakultet.Models.DTO.SmjerDTORead.Sifra')
  - [brojStudenata](#P-Fakultet-Models-DTO-SmjerDTORead-brojStudenata 'Fakultet.Models.DTO.SmjerDTORead.brojStudenata')
- [Student](#T-Fakultet-Models-Student 'Fakultet.Models.Student')
  - [Ime](#P-Fakultet-Models-Student-Ime 'Fakultet.Models.Student.Ime')
  - [Oib](#P-Fakultet-Models-Student-Oib 'Fakultet.Models.Student.Oib')
  - [Prezime](#P-Fakultet-Models-Student-Prezime 'Fakultet.Models.Student.Prezime')
  - [Rokovi](#P-Fakultet-Models-Student-Rokovi 'Fakultet.Models.Student.Rokovi')
  - [Smjer](#P-Fakultet-Models-Student-Smjer 'Fakultet.Models.Student.Smjer')
- [StudentController](#T-Fakultet-Controllers-StudentController 'Fakultet.Controllers.StudentController')
  - [#ctor(context,mapper)](#M-Fakultet-Controllers-StudentController-#ctor-Fakultet-Data-FakultetContext,AutoMapper-IMapper- 'Fakultet.Controllers.StudentController.#ctor(Fakultet.Data.FakultetContext,AutoMapper.IMapper)')
  - [Delete(sifra)](#M-Fakultet-Controllers-StudentController-Delete-System-Int32- 'Fakultet.Controllers.StudentController.Delete(System.Int32)')
  - [Generiraj(broj)](#M-Fakultet-Controllers-StudentController-Generiraj-System-Int32- 'Fakultet.Controllers.StudentController.Generiraj(System.Int32)')
  - [Get()](#M-Fakultet-Controllers-StudentController-Get 'Fakultet.Controllers.StudentController.Get')
  - [GetBySifra(sifra)](#M-Fakultet-Controllers-StudentController-GetBySifra-System-Int32- 'Fakultet.Controllers.StudentController.GetBySifra(System.Int32)')
  - [Post(dto)](#M-Fakultet-Controllers-StudentController-Post-Fakultet-Models-DTO-StudentDTOInsertUpdate- 'Fakultet.Controllers.StudentController.Post(Fakultet.Models.DTO.StudentDTOInsertUpdate)')
  - [PostaviSliku(sifra,slika)](#M-Fakultet-Controllers-StudentController-PostaviSliku-System-Int32,Fakultet-Models-DTO-SlikaDTO- 'Fakultet.Controllers.StudentController.PostaviSliku(System.Int32,Fakultet.Models.DTO.SlikaDTO)')
  - [Put(sifra,dto)](#M-Fakultet-Controllers-StudentController-Put-System-Int32,Fakultet-Models-DTO-StudentDTOInsertUpdate- 'Fakultet.Controllers.StudentController.Put(System.Int32,Fakultet.Models.DTO.StudentDTOInsertUpdate)')
  - [TraziStudentStranicenje(stranica,uvjet)](#M-Fakultet-Controllers-StudentController-TraziStudentStranicenje-System-Int32,System-String- 'Fakultet.Controllers.StudentController.TraziStudentStranicenje(System.Int32,System.String)')
  - [TraziStudenta(uvjet)](#M-Fakultet-Controllers-StudentController-TraziStudenta-System-String- 'Fakultet.Controllers.StudentController.TraziStudenta(System.String)')
- [StudentDTOInsertUpdate](#T-Fakultet-Models-DTO-StudentDTOInsertUpdate 'Fakultet.Models.DTO.StudentDTOInsertUpdate')
  - [#ctor(SmjerSifra,Ime,Prezime,Oib)](#M-Fakultet-Models-DTO-StudentDTOInsertUpdate-#ctor-System-Nullable{System-Int32},System-String,System-String,System-String- 'Fakultet.Models.DTO.StudentDTOInsertUpdate.#ctor(System.Nullable{System.Int32},System.String,System.String,System.String)')
  - [Ime](#P-Fakultet-Models-DTO-StudentDTOInsertUpdate-Ime 'Fakultet.Models.DTO.StudentDTOInsertUpdate.Ime')
  - [Oib](#P-Fakultet-Models-DTO-StudentDTOInsertUpdate-Oib 'Fakultet.Models.DTO.StudentDTOInsertUpdate.Oib')
  - [Prezime](#P-Fakultet-Models-DTO-StudentDTOInsertUpdate-Prezime 'Fakultet.Models.DTO.StudentDTOInsertUpdate.Prezime')
  - [SmjerSifra](#P-Fakultet-Models-DTO-StudentDTOInsertUpdate-SmjerSifra 'Fakultet.Models.DTO.StudentDTOInsertUpdate.SmjerSifra')
- [StudentDTORead](#T-Fakultet-Models-DTO-StudentDTORead 'Fakultet.Models.DTO.StudentDTORead')
  - [#ctor(Sifra,SmjerNaziv,Ime,Prezime,Oib,Slika)](#M-Fakultet-Models-DTO-StudentDTORead-#ctor-System-Nullable{System-Int32},System-String,System-String,System-String,System-String,System-String- 'Fakultet.Models.DTO.StudentDTORead.#ctor(System.Nullable{System.Int32},System.String,System.String,System.String,System.String,System.String)')
  - [Ime](#P-Fakultet-Models-DTO-StudentDTORead-Ime 'Fakultet.Models.DTO.StudentDTORead.Ime')
  - [Oib](#P-Fakultet-Models-DTO-StudentDTORead-Oib 'Fakultet.Models.DTO.StudentDTORead.Oib')
  - [Prezime](#P-Fakultet-Models-DTO-StudentDTORead-Prezime 'Fakultet.Models.DTO.StudentDTORead.Prezime')
  - [Sifra](#P-Fakultet-Models-DTO-StudentDTORead-Sifra 'Fakultet.Models.DTO.StudentDTORead.Sifra')
  - [Slika](#P-Fakultet-Models-DTO-StudentDTORead-Slika 'Fakultet.Models.DTO.StudentDTORead.Slika')
  - [SmjerNaziv](#P-Fakultet-Models-DTO-StudentDTORead-SmjerNaziv 'Fakultet.Models.DTO.StudentDTORead.SmjerNaziv')

<a name='T-Fakultet-Controllers-AutorizacijaController'></a>
## AutorizacijaController `type`

##### Namespace

Fakultet.Controllers

##### Summary

Kontroler za autorizaciju korisnika.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [T:Fakultet.Controllers.AutorizacijaController](#T-T-Fakultet-Controllers-AutorizacijaController 'T:Fakultet.Controllers.AutorizacijaController') | Kontekst baze podataka. |

##### Remarks

Inicijalizira novu instancu klase [AutorizacijaController](#T-Fakultet-Controllers-AutorizacijaController 'Fakultet.Controllers.AutorizacijaController').

<a name='M-Fakultet-Controllers-AutorizacijaController-#ctor-Fakultet-Data-FakultetContext-'></a>
### #ctor(context) `constructor`

##### Summary

Kontroler za autorizaciju korisnika.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [Fakultet.Data.FakultetContext](#T-Fakultet-Data-FakultetContext 'Fakultet.Data.FakultetContext') | Kontekst baze podataka. |

##### Remarks

Inicijalizira novu instancu klase [AutorizacijaController](#T-Fakultet-Controllers-AutorizacijaController 'Fakultet.Controllers.AutorizacijaController').

<a name='F-Fakultet-Controllers-AutorizacijaController-_context'></a>
### _context `constants`

##### Summary

Kontekst baze podataka

<a name='M-Fakultet-Controllers-AutorizacijaController-GenerirajToken-Fakultet-Models-DTO-OperaterDTO-'></a>
### GenerirajToken(operater) `method`

##### Summary

Generira token za autorizaciju.

##### Returns

JWT token ako je autorizacija uspješna, inače vraća status 403.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| operater | [Fakultet.Models.DTO.OperaterDTO](#T-Fakultet-Models-DTO-OperaterDTO 'Fakultet.Models.DTO.OperaterDTO') | DTO objekt koji sadrži email i lozinku operatera. |

##### Remarks

Primjer zahtjeva:

```json
{
  "email": "fakultet@fakultet.hr",
  "password": "fakultet"
}
```

<a name='T-Fakultet-Models-Entitet'></a>
## Entitet `type`

##### Namespace

Fakultet.Models

##### Summary

Apstraktna klasa koja predstavlja entitet s jedinstvenim identifikatorom.

<a name='P-Fakultet-Models-Entitet-Sifra'></a>
### Sifra `property`

##### Summary

Jedinstveni identifikator entiteta.

<a name='T-Fakultet-Data-FakultetContext'></a>
## FakultetContext `type`

##### Namespace

Fakultet.Data

##### Summary

Kontekst baze podataka za aplikaciju Fakultet.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| options | [T:Fakultet.Data.FakultetContext](#T-T-Fakultet-Data-FakultetContext 'T:Fakultet.Data.FakultetContext') | Opcije za konfiguraciju konteksta. |

##### Remarks

Konstruktor koji prima opcije za konfiguraciju konteksta.

<a name='M-Fakultet-Data-FakultetContext-#ctor-Microsoft-EntityFrameworkCore-DbContextOptions{Fakultet-Data-FakultetContext}-'></a>
### #ctor(options) `constructor`

##### Summary

Kontekst baze podataka za aplikaciju Fakultet.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| options | [Microsoft.EntityFrameworkCore.DbContextOptions{Fakultet.Data.FakultetContext}](#T-Microsoft-EntityFrameworkCore-DbContextOptions{Fakultet-Data-FakultetContext} 'Microsoft.EntityFrameworkCore.DbContextOptions{Fakultet.Data.FakultetContext}') | Opcije za konfiguraciju konteksta. |

##### Remarks

Konstruktor koji prima opcije za konfiguraciju konteksta.

<a name='P-Fakultet-Data-FakultetContext-IspitniRok'></a>
### IspitniRok `property`

##### Summary

Skup podataka za entitet IspitniRok.

<a name='P-Fakultet-Data-FakultetContext-Kolegiji'></a>
### Kolegiji `property`

##### Summary

Skup podataka za entitet Kolegij.

<a name='P-Fakultet-Data-FakultetContext-Operateri'></a>
### Operateri `property`

##### Summary

Skup podataka za entitet Operater.

<a name='P-Fakultet-Data-FakultetContext-Smjerovi'></a>
### Smjerovi `property`

##### Summary

Skup podataka za entitet Smjer.

<a name='P-Fakultet-Data-FakultetContext-Studenti'></a>
### Studenti `property`

##### Summary

Skup podataka za entitet Student.

<a name='M-Fakultet-Data-FakultetContext-OnModelCreating-Microsoft-EntityFrameworkCore-ModelBuilder-'></a>
### OnModelCreating(modelBuilder) `method`

##### Summary

Konfiguracija modela prilikom kreiranja baze podataka.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| modelBuilder | [Microsoft.EntityFrameworkCore.ModelBuilder](#T-Microsoft-EntityFrameworkCore-ModelBuilder 'Microsoft.EntityFrameworkCore.ModelBuilder') | Graditelj modela. |

<a name='T-Fakultet-Controllers-FakultetController'></a>
## FakultetController `type`

##### Namespace

Fakultet.Controllers

##### Summary

Apstraktna klasa FakultetController koja služi kao osnovna klasa za sve kontrolere u aplikaciji.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [T:Fakultet.Controllers.FakultetController](#T-T-Fakultet-Controllers-FakultetController 'T:Fakultet.Controllers.FakultetController') | Instanca FakultetContext klase koja se koristi za pristup bazi podataka. |

<a name='M-Fakultet-Controllers-FakultetController-#ctor-Fakultet-Data-FakultetContext,AutoMapper-IMapper-'></a>
### #ctor(context,mapper) `constructor`

##### Summary

Apstraktna klasa FakultetController koja služi kao osnovna klasa za sve kontrolere u aplikaciji.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [Fakultet.Data.FakultetContext](#T-Fakultet-Data-FakultetContext 'Fakultet.Data.FakultetContext') | Instanca FakultetContext klase koja se koristi za pristup bazi podataka. |
| mapper | [AutoMapper.IMapper](#T-AutoMapper-IMapper 'AutoMapper.IMapper') | Instanca IMapper sučelja koja se koristi za mapiranje objekata. |

<a name='F-Fakultet-Controllers-FakultetController-_context'></a>
### _context `constants`

##### Summary

Kontekst baze podataka.

<a name='F-Fakultet-Controllers-FakultetController-_mapper'></a>
### _mapper `constants`

##### Summary

Mapper za mapiranje objekata.

<a name='T-Fakultet-Extensions-FakultetExtensions'></a>
## FakultetExtensions `type`

##### Namespace

Fakultet.Extensions

##### Summary

Klasa koja sadrži proširenja za Fakultet aplikaciju.

<a name='M-Fakultet-Extensions-FakultetExtensions-AddFakultetCORS-Microsoft-Extensions-DependencyInjection-IServiceCollection-'></a>
### AddFakultetCORS(Services) `method`

##### Summary

Dodaje konfiguraciju za CORS.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Services | [Microsoft.Extensions.DependencyInjection.IServiceCollection](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection 'Microsoft.Extensions.DependencyInjection.IServiceCollection') | Instanca IServiceCollection. |

<a name='M-Fakultet-Extensions-FakultetExtensions-AddFakultetSecurity-Microsoft-Extensions-DependencyInjection-IServiceCollection-'></a>
### AddFakultetSecurity(Services) `method`

##### Summary

Dodaje konfiguraciju za sigurnost.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Services | [Microsoft.Extensions.DependencyInjection.IServiceCollection](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection 'Microsoft.Extensions.DependencyInjection.IServiceCollection') | Instanca IServiceCollection. |

<a name='M-Fakultet-Extensions-FakultetExtensions-AddFakultetSwaggerGen-Microsoft-Extensions-DependencyInjection-IServiceCollection-'></a>
### AddFakultetSwaggerGen(Services) `method`

##### Summary

Dodaje konfiguraciju za Swagger dokumentaciju.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Services | [Microsoft.Extensions.DependencyInjection.IServiceCollection](#T-Microsoft-Extensions-DependencyInjection-IServiceCollection 'Microsoft.Extensions.DependencyInjection.IServiceCollection') | Instanca IServiceCollection. |

<a name='T-Fakultet-Mapping-FakultetMappingProfile'></a>
## FakultetMappingProfile `type`

##### Namespace

Fakultet.Mapping

##### Summary

Klasa za definiranje mapiranja između modela i DTO-a.

<a name='M-Fakultet-Mapping-FakultetMappingProfile-#ctor'></a>
### #ctor() `constructor`

##### Summary

Konstruktor u kojem se definiraju mapiranja.

##### Parameters

This constructor has no parameters.

<a name='M-Fakultet-Mapping-FakultetMappingProfile-PutanjaDatoteke-Fakultet-Models-Student-'></a>
### PutanjaDatoteke(e) `method`

##### Summary

Metoda za dobivanje putanje do slike studenta.

##### Returns

Putanja do slike ili null ako slika ne postoji.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| e | [Fakultet.Models.Student](#T-Fakultet-Models-Student 'Fakultet.Models.Student') | Objekt studenta. |

<a name='T-Fakultet-Models-DTO-GrafIspitniRokDTO'></a>
## GrafIspitniRokDTO `type`

##### Namespace

Fakultet.Models.DTO

##### Summary

DTO klasa koja predstavlja graf ispitnog roka.

<a name='M-Fakultet-Models-DTO-GrafIspitniRokDTO-#ctor-System-String,System-Int32-'></a>
### #ctor() `constructor`

##### Summary

DTO klasa koja predstavlja graf ispitnog roka.

##### Parameters

This constructor has no parameters.

<a name='T-Fakultet-Models-IspitniRok'></a>
## IspitniRok `type`

##### Namespace

Fakultet.Models

##### Summary

Klasa koja predstavlja ispitni rok.

<a name='P-Fakultet-Models-IspitniRok-Datum'></a>
### Datum `property`

##### Summary

Vrijeme održavanja ispitnog roka.

<a name='P-Fakultet-Models-IspitniRok-Kolegij'></a>
### Kolegij `property`

##### Summary

Kolegij kojem ispitni rok pripada.

<a name='P-Fakultet-Models-IspitniRok-Pristupnici'></a>
### Pristupnici `property`

##### Summary

Studenti koji su prijavljeni na ispitni rok.

<a name='P-Fakultet-Models-IspitniRok-VrstaIspita'></a>
### VrstaIspita `property`

##### Summary

Vrsta ispita (usmeni / pismeni).

<a name='T-Fakultet-Controllers-IspitniRokController'></a>
## IspitniRokController `type`

##### Namespace

Fakultet.Controllers

##### Summary

Kontroler za upravljanje ispitnim rokovima u aplikaciji.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [T:Fakultet.Controllers.IspitniRokController](#T-T-Fakultet-Controllers-IspitniRokController 'T:Fakultet.Controllers.IspitniRokController') | Instanca FakultetContext klase koja se koristi za pristup bazi podataka. |

<a name='M-Fakultet-Controllers-IspitniRokController-#ctor-Fakultet-Data-FakultetContext,AutoMapper-IMapper-'></a>
### #ctor(context,mapper) `constructor`

##### Summary

Kontroler za upravljanje ispitnim rokovima u aplikaciji.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [Fakultet.Data.FakultetContext](#T-Fakultet-Data-FakultetContext 'Fakultet.Data.FakultetContext') | Instanca FakultetContext klase koja se koristi za pristup bazi podataka. |
| mapper | [AutoMapper.IMapper](#T-AutoMapper-IMapper 'AutoMapper.IMapper') | Instanca IMapper sučelja koja se koristi za mapiranje objekata. |

<a name='M-Fakultet-Controllers-IspitniRokController-Delete-System-Int32-'></a>
### Delete(sifra) `method`

##### Summary

Briše ispitni rok prema šifri.

##### Returns

Status brisanja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra ispitnog roka. |

<a name='M-Fakultet-Controllers-IspitniRokController-DodajPristupnika-System-Int32,System-Int32-'></a>
### DodajPristupnika(sifra,studentSifra) `method`

##### Summary

Dodaje pristupnika u ispitni rok.

##### Returns

Status dodavanja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra ispitnog roka. |
| studentSifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra studenta. |

<a name='M-Fakultet-Controllers-IspitniRokController-Get'></a>
### Get() `method`

##### Summary

Dohvaća sve ispitne rokove.

##### Returns

Lista ispitnih rokova.

##### Parameters

This method has no parameters.

<a name='M-Fakultet-Controllers-IspitniRokController-GetBySifra-System-Int32-'></a>
### GetBySifra(sifra) `method`

##### Summary

Dohvaća ispitni rok prema šifri.

##### Returns

Ispitni rok sa zadanom šifrom.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra ispitnog roka. |

<a name='M-Fakultet-Controllers-IspitniRokController-GetPristupnici-System-Int32-'></a>
### GetPristupnici(sifraRoka) `method`

##### Summary

Dohvaća pristupnike roka prema šifri roka.

##### Returns

Lista pristupnika roka.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifraRoka | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra ispitnog roka. |

<a name='M-Fakultet-Controllers-IspitniRokController-GrafIspitnogRoka'></a>
### GrafIspitnogRoka() `method`

##### Summary

Dohvaća graf ispitnog roka.

##### Returns

Lista grafova ispitnog roka.

##### Parameters

This method has no parameters.

<a name='M-Fakultet-Controllers-IspitniRokController-ObrisiPolaznika-System-Int32,System-Int32-'></a>
### ObrisiPolaznika(sifra,studentSifra) `method`

##### Summary

Briše studenta iz ispitnog roka.

##### Returns

Status brisanja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra ispitnog roka. |
| studentSifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra studenta. |

<a name='M-Fakultet-Controllers-IspitniRokController-Post-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate-'></a>
### Post(dto) `method`

##### Summary

Dodaje novi ispitni rok.

##### Returns

Status kreiranja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| dto | [Fakultet.Models.DTO.IspitniRokDTOInsertUpdate](#T-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate 'Fakultet.Models.DTO.IspitniRokDTOInsertUpdate') | Podatci o ispitnom roku. |

<a name='M-Fakultet-Controllers-IspitniRokController-Put-System-Int32,Fakultet-Models-DTO-IspitniRokDTOInsertUpdate-'></a>
### Put(sifra,dto) `method`

##### Summary

Ažurira postojeći ispitni rok.

##### Returns

Status ažuriranja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra ispitnog roka. |
| dto | [Fakultet.Models.DTO.IspitniRokDTOInsertUpdate](#T-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate 'Fakultet.Models.DTO.IspitniRokDTOInsertUpdate') | Podatci o ispitnom roku. |

<a name='T-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate'></a>
## IspitniRokDTOInsertUpdate `type`

##### Namespace

Fakultet.Models.DTO

##### Summary

DTO za unos i ažuriranje ispitnog roka.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| KolegijSifra | [T:Fakultet.Models.DTO.IspitniRokDTOInsertUpdate](#T-T-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate 'T:Fakultet.Models.DTO.IspitniRokDTOInsertUpdate') | Šifra kolegija (obavezno, mora biti između 1 i int.MaxValue). |

<a name='M-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate-#ctor-System-Nullable{System-Int32},System-String,System-Nullable{System-DateTime}-'></a>
### #ctor(KolegijSifra,VrstaIspita,Datum) `constructor`

##### Summary

DTO za unos i ažuriranje ispitnog roka.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| KolegijSifra | [System.Nullable{System.Int32}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.Int32}') | Šifra kolegija (obavezno, mora biti između 1 i int.MaxValue). |
| VrstaIspita | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Vrsta ispita (usmeni / pismeni). |
| Datum | [System.Nullable{System.DateTime}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.DateTime}') | Vrijeme održavanja ispitnog roka. |

<a name='P-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate-Datum'></a>
### Datum `property`

##### Summary

Vrijeme održavanja ispitnog roka.

<a name='P-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate-KolegijSifra'></a>
### KolegijSifra `property`

##### Summary

Šifra kolegija (obavezno, mora biti između 1 i int.MaxValue).

<a name='P-Fakultet-Models-DTO-IspitniRokDTOInsertUpdate-VrstaIspita'></a>
### VrstaIspita `property`

##### Summary

Vrsta ispita (usmeni / pismeni).

<a name='T-Fakultet-Models-DTO-IspitniRokDTORead'></a>
## IspitniRokDTORead `type`

##### Namespace

Fakultet.Models.DTO

##### Summary

DTO za čitanje podataka o ispitnom roku.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Sifra | [T:Fakultet.Models.DTO.IspitniRokDTORead](#T-T-Fakultet-Models-DTO-IspitniRokDTORead 'T:Fakultet.Models.DTO.IspitniRokDTORead') | Jedinstveni identifikator ispitnog roka. |

<a name='M-Fakultet-Models-DTO-IspitniRokDTORead-#ctor-System-Int32,System-String,System-String,System-Nullable{System-DateTime}-'></a>
### #ctor(Sifra,KolegijNaziv,VrstaIspita,Datum) `constructor`

##### Summary

DTO za čitanje podataka o ispitnom roku.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Jedinstveni identifikator ispitnog roka. |
| KolegijNaziv | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Naziv kolegija kojem ispitni rok pripada. |
| VrstaIspita | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Vrsta ispita (usmeni / pismeni). |
| Datum | [System.Nullable{System.DateTime}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.DateTime}') | Vrijeme održavanja ispitnog roka. |

<a name='P-Fakultet-Models-DTO-IspitniRokDTORead-Datum'></a>
### Datum `property`

##### Summary

Vrijeme održavanja ispitnog roka.

<a name='P-Fakultet-Models-DTO-IspitniRokDTORead-KolegijNaziv'></a>
### KolegijNaziv `property`

##### Summary

Naziv kolegija kojem ispitni rok pripada.

<a name='P-Fakultet-Models-DTO-IspitniRokDTORead-Sifra'></a>
### Sifra `property`

##### Summary

Jedinstveni identifikator ispitnog roka.

<a name='P-Fakultet-Models-DTO-IspitniRokDTORead-VrstaIspita'></a>
### VrstaIspita `property`

##### Summary

Vrsta ispita (usmeni / pismeni).

<a name='T-Fakultet-Models-Kolegij'></a>
## Kolegij `type`

##### Namespace

Fakultet.Models

##### Summary

Klasa koja predstavlja kolegij.

<a name='P-Fakultet-Models-Kolegij-Naziv'></a>
### Naziv `property`

##### Summary

Naziv kolegija.

<a name='P-Fakultet-Models-Kolegij-Obavezni'></a>
### Obavezni `property`

##### Summary

Status kolegija (obavezni / izborni).

<a name='P-Fakultet-Models-Kolegij-Predavac'></a>
### Predavac `property`

##### Summary

Ime predavača na kolegiju.

<a name='P-Fakultet-Models-Kolegij-Smjer'></a>
### Smjer `property`

##### Summary

Smjer kojem kolegij pripada.

<a name='T-Fakultet-Controllers-KolegijController'></a>
## KolegijController `type`

##### Namespace

Fakultet.Controllers

##### Summary

Kontroler za upravljanje kolegijima u aplikaciji.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [T:Fakultet.Controllers.KolegijController](#T-T-Fakultet-Controllers-KolegijController 'T:Fakultet.Controllers.KolegijController') | Instanca FakultetContext klase koja se koristi za pristup bazi podataka. |

<a name='M-Fakultet-Controllers-KolegijController-#ctor-Fakultet-Data-FakultetContext,AutoMapper-IMapper-'></a>
### #ctor(context,mapper) `constructor`

##### Summary

Kontroler za upravljanje kolegijima u aplikaciji.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [Fakultet.Data.FakultetContext](#T-Fakultet-Data-FakultetContext 'Fakultet.Data.FakultetContext') | Instanca FakultetContext klase koja se koristi za pristup bazi podataka. |
| mapper | [AutoMapper.IMapper](#T-AutoMapper-IMapper 'AutoMapper.IMapper') | Instanca IMapper sučelja koja se koristi za mapiranje objekata. |

<a name='M-Fakultet-Controllers-KolegijController-Delete-System-Int32-'></a>
### Delete(sifra) `method`

##### Summary

Briše kolegij prema šifri.

##### Returns

Status brisanja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra kolegija. |

<a name='M-Fakultet-Controllers-KolegijController-Get'></a>
### Get() `method`

##### Summary

Dohvaća sve kolegije.

##### Returns

Lista kolegija.

##### Parameters

This method has no parameters.

<a name='M-Fakultet-Controllers-KolegijController-GetBySifra-System-Int32-'></a>
### GetBySifra(sifra) `method`

##### Summary

Dohvaća kolegij prema šifri.

##### Returns

Kolegij sa zadanom šifrom.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra kolegija. |

<a name='M-Fakultet-Controllers-KolegijController-Post-Fakultet-Models-DTO-KolegijDTOInsertUpdate-'></a>
### Post(dto) `method`

##### Summary

Dodaje novi kolegij.

##### Returns

Status kreiranja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| dto | [Fakultet.Models.DTO.KolegijDTOInsertUpdate](#T-Fakultet-Models-DTO-KolegijDTOInsertUpdate 'Fakultet.Models.DTO.KolegijDTOInsertUpdate') | Podatci o kolegiju. |

<a name='M-Fakultet-Controllers-KolegijController-Put-System-Int32,Fakultet-Models-DTO-KolegijDTOInsertUpdate-'></a>
### Put(sifra,dto) `method`

##### Summary

Ažurira postojeći kolegij.

##### Returns

Status ažuriranja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra kolegija. |
| dto | [Fakultet.Models.DTO.KolegijDTOInsertUpdate](#T-Fakultet-Models-DTO-KolegijDTOInsertUpdate 'Fakultet.Models.DTO.KolegijDTOInsertUpdate') | Podatci o kolegiju. |

<a name='T-Fakultet-Models-DTO-KolegijDTOInsertUpdate'></a>
## KolegijDTOInsertUpdate `type`

##### Namespace

Fakultet.Models.DTO

##### Summary

DTO za unos i ažuriranje kolegija.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| SmjerSifra | [T:Fakultet.Models.DTO.KolegijDTOInsertUpdate](#T-T-Fakultet-Models-DTO-KolegijDTOInsertUpdate 'T:Fakultet.Models.DTO.KolegijDTOInsertUpdate') | Šifra smjera (obavezno, mora biti između 1 i int.MaxValue). |

<a name='M-Fakultet-Models-DTO-KolegijDTOInsertUpdate-#ctor-System-Nullable{System-Int32},System-String,System-String,System-Nullable{System-Boolean}-'></a>
### #ctor(SmjerSifra,Naziv,Predavac,Obavezni) `constructor`

##### Summary

DTO za unos i ažuriranje kolegija.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| SmjerSifra | [System.Nullable{System.Int32}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.Int32}') | Šifra smjera (obavezno, mora biti između 1 i int.MaxValue). |
| Naziv | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Naziv kolegija (obavezno). |
| Predavac | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Ime predavača. |
| Obavezni | [System.Nullable{System.Boolean}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.Boolean}') | Status kolegija (true = obavezni, false = izborni). |

<a name='P-Fakultet-Models-DTO-KolegijDTOInsertUpdate-Naziv'></a>
### Naziv `property`

##### Summary

Naziv kolegija (obavezno).

<a name='P-Fakultet-Models-DTO-KolegijDTOInsertUpdate-Obavezni'></a>
### Obavezni `property`

##### Summary

Status kolegija (true = obavezni, false = izborni).

<a name='P-Fakultet-Models-DTO-KolegijDTOInsertUpdate-Predavac'></a>
### Predavac `property`

##### Summary

Ime predavača.

<a name='P-Fakultet-Models-DTO-KolegijDTOInsertUpdate-SmjerSifra'></a>
### SmjerSifra `property`

##### Summary

Šifra smjera (obavezno, mora biti između 1 i int.MaxValue).

<a name='T-Fakultet-Models-DTO-KolegijDTORead'></a>
## KolegijDTORead `type`

##### Namespace

Fakultet.Models.DTO

##### Summary

DTO za čitanje podataka o kolegiju.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Sifra | [T:Fakultet.Models.DTO.KolegijDTORead](#T-T-Fakultet-Models-DTO-KolegijDTORead 'T:Fakultet.Models.DTO.KolegijDTORead') | Jedinstveni identifikator kolegija. |

<a name='M-Fakultet-Models-DTO-KolegijDTORead-#ctor-System-Int32,System-String,System-String,System-String,System-Nullable{System-Boolean}-'></a>
### #ctor(Sifra,SmjerNaziv,Naziv,Predavac,Obavezni) `constructor`

##### Summary

DTO za čitanje podataka o kolegiju.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Jedinstveni identifikator kolegija. |
| SmjerNaziv | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Naziv smjera kojem kolegij pripada. |
| Naziv | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Naziv kolegija. |
| Predavac | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Ime predavača kolegija. |
| Obavezni | [System.Nullable{System.Boolean}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.Boolean}') | Status kolegija (obavezni / izborni). |

<a name='P-Fakultet-Models-DTO-KolegijDTORead-Naziv'></a>
### Naziv `property`

##### Summary

Naziv kolegija.

<a name='P-Fakultet-Models-DTO-KolegijDTORead-Obavezni'></a>
### Obavezni `property`

##### Summary

Status kolegija (obavezni / izborni).

<a name='P-Fakultet-Models-DTO-KolegijDTORead-Predavac'></a>
### Predavac `property`

##### Summary

Ime predavača kolegija.

<a name='P-Fakultet-Models-DTO-KolegijDTORead-Sifra'></a>
### Sifra `property`

##### Summary

Jedinstveni identifikator kolegija.

<a name='P-Fakultet-Models-DTO-KolegijDTORead-SmjerNaziv'></a>
### SmjerNaziv `property`

##### Summary

Naziv smjera kojem kolegij pripada.

<a name='T-Fakultet-Models-Operater'></a>
## Operater `type`

##### Namespace

Fakultet.Models

##### Summary

Operater koji se koristi za prijavu u sustav.

<a name='P-Fakultet-Models-Operater-Email'></a>
### Email `property`

##### Summary

Email operatera.

<a name='P-Fakultet-Models-Operater-Lozinka'></a>
### Lozinka `property`

##### Summary

Lozinka operatera.

<a name='T-Fakultet-Models-DTO-OperaterDTO'></a>
## OperaterDTO `type`

##### Namespace

Fakultet.Models.DTO

##### Summary

DTO (Data Transfer Object) za operatera.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| email | [T:Fakultet.Models.DTO.OperaterDTO](#T-T-Fakultet-Models-DTO-OperaterDTO 'T:Fakultet.Models.DTO.OperaterDTO') | Email operatera. |

<a name='M-Fakultet-Models-DTO-OperaterDTO-#ctor-System-String,System-String-'></a>
### #ctor(email,password) `constructor`

##### Summary

DTO (Data Transfer Object) za operatera.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| email | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Email operatera. |
| password | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Lozinka operatera. |

<a name='P-Fakultet-Models-DTO-OperaterDTO-email'></a>
### email `property`

##### Summary

Email operatera.

<a name='P-Fakultet-Models-DTO-OperaterDTO-password'></a>
### password `property`

##### Summary

Lozinka operatera.

<a name='T-Fakultet-Controllers-PocetnaController'></a>
## PocetnaController `type`

##### Namespace

Fakultet.Controllers

##### Summary

Kontroler za početne operacije.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _context | [T:Fakultet.Controllers.PocetnaController](#T-T-Fakultet-Controllers-PocetnaController 'T:Fakultet.Controllers.PocetnaController') | Kontekst baze podataka. |

<a name='M-Fakultet-Controllers-PocetnaController-#ctor-Fakultet-Data-FakultetContext,AutoMapper-IMapper-'></a>
### #ctor(_context,_mapper) `constructor`

##### Summary

Kontroler za početne operacije.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _context | [Fakultet.Data.FakultetContext](#T-Fakultet-Data-FakultetContext 'Fakultet.Data.FakultetContext') | Kontekst baze podataka. |
| _mapper | [AutoMapper.IMapper](#T-AutoMapper-IMapper 'AutoMapper.IMapper') | Mapper za mapiranje objekata. |

<a name='M-Fakultet-Controllers-PocetnaController-DostupniRokovi'></a>
### DostupniRokovi() `method`

##### Summary

Dohvaća dostupne ispitne rokove.

##### Returns

Lista dostupnih rokova.

##### Parameters

This method has no parameters.

<a name='M-Fakultet-Controllers-PocetnaController-UkupnoStudenata'></a>
### UkupnoStudenata() `method`

##### Summary

Dohvaća ukupan broj studenata.

##### Returns

Ukupan broj studenata.

##### Parameters

This method has no parameters.

<a name='T-Fakultet-Models-DTO-SlikaDTO'></a>
## SlikaDTO `type`

##### Namespace

Fakultet.Models.DTO

##### Summary

DTO za unos slike.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Base64 | [T:Fakultet.Models.DTO.SlikaDTO](#T-T-Fakultet-Models-DTO-SlikaDTO 'T:Fakultet.Models.DTO.SlikaDTO') | Slika zapisana u Base64 formatu |

<a name='M-Fakultet-Models-DTO-SlikaDTO-#ctor-System-String-'></a>
### #ctor(Base64) `constructor`

##### Summary

DTO za unos slike.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Base64 | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Slika zapisana u Base64 formatu |

<a name='P-Fakultet-Models-DTO-SlikaDTO-Base64'></a>
### Base64 `property`

##### Summary

Slika zapisana u Base64 formatu

<a name='T-Fakultet-Models-Smjer'></a>
## Smjer `type`

##### Namespace

Fakultet.Models

##### Summary

Predstavlja smjer u sustavu.

<a name='P-Fakultet-Models-Smjer-BrojStudenata'></a>
### BrojStudenata `property`

##### Summary

Maksimalan broj studenata na smjeru.

<a name='P-Fakultet-Models-Smjer-Naziv'></a>
### Naziv `property`

##### Summary

Naziv smjera.

<a name='T-Fakultet-Controllers-SmjerController'></a>
## SmjerController `type`

##### Namespace

Fakultet.Controllers

##### Summary

Kontroler za upravljanje smjerovima u aplikaciji.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [T:Fakultet.Controllers.SmjerController](#T-T-Fakultet-Controllers-SmjerController 'T:Fakultet.Controllers.SmjerController') | Instanca FakultetContext klase koja se koristi za pristup bazi podataka. |

<a name='M-Fakultet-Controllers-SmjerController-#ctor-Fakultet-Data-FakultetContext,AutoMapper-IMapper-'></a>
### #ctor(context,mapper) `constructor`

##### Summary

Kontroler za upravljanje smjerovima u aplikaciji.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [Fakultet.Data.FakultetContext](#T-Fakultet-Data-FakultetContext 'Fakultet.Data.FakultetContext') | Instanca FakultetContext klase koja se koristi za pristup bazi podataka. |
| mapper | [AutoMapper.IMapper](#T-AutoMapper-IMapper 'AutoMapper.IMapper') | Instanca IMapper sučelja koja se koristi za mapiranje objekata. |

<a name='M-Fakultet-Controllers-SmjerController-Delete-System-Int32-'></a>
### Delete(sifra) `method`

##### Summary

Briše smjer prema šifri.

##### Returns

Status brisanja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra smjera. |

<a name='M-Fakultet-Controllers-SmjerController-Get'></a>
### Get() `method`

##### Summary

Dohvaća sve smjerove.

##### Returns

Lista smjerova.

##### Parameters

This method has no parameters.

<a name='M-Fakultet-Controllers-SmjerController-GetBySifra-System-Int32-'></a>
### GetBySifra(sifra) `method`

##### Summary

Dohvaća smjer prema šifri.

##### Returns

Smjer sa zadanom šifrom.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra smjera. |

<a name='M-Fakultet-Controllers-SmjerController-Post-Fakultet-Models-DTO-SmjerDTOInsertUpdate-'></a>
### Post(dto) `method`

##### Summary

Dodaje novi smjer.

##### Returns

Status kreiranja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| dto | [Fakultet.Models.DTO.SmjerDTOInsertUpdate](#T-Fakultet-Models-DTO-SmjerDTOInsertUpdate 'Fakultet.Models.DTO.SmjerDTOInsertUpdate') | Podatci o smjeru. |

<a name='M-Fakultet-Controllers-SmjerController-Put-System-Int32,Fakultet-Models-DTO-SmjerDTOInsertUpdate-'></a>
### Put(sifra,dto) `method`

##### Summary

Ažurira postojeći smjer.

##### Returns

Status ažuriranja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra smjera. |
| dto | [Fakultet.Models.DTO.SmjerDTOInsertUpdate](#T-Fakultet-Models-DTO-SmjerDTOInsertUpdate 'Fakultet.Models.DTO.SmjerDTOInsertUpdate') | Podatci o smjeru. |

<a name='T-Fakultet-Models-DTO-SmjerDTOInsertUpdate'></a>
## SmjerDTOInsertUpdate `type`

##### Namespace

Fakultet.Models.DTO

##### Summary

DTO za unos i ažuriranje smjera.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Naziv | [T:Fakultet.Models.DTO.SmjerDTOInsertUpdate](#T-T-Fakultet-Models-DTO-SmjerDTOInsertUpdate 'T:Fakultet.Models.DTO.SmjerDTOInsertUpdate') | Naziv smjera (obavezno). |

<a name='M-Fakultet-Models-DTO-SmjerDTOInsertUpdate-#ctor-System-String,System-Nullable{System-Int32}-'></a>
### #ctor(Naziv,brojStudenata) `constructor`

##### Summary

DTO za unos i ažuriranje smjera.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Naziv | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Naziv smjera (obavezno). |
| brojStudenata | [System.Nullable{System.Int32}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.Int32}') | Maksimalan broj studenata (mora biti između 20 i 80). |

<a name='P-Fakultet-Models-DTO-SmjerDTOInsertUpdate-Naziv'></a>
### Naziv `property`

##### Summary

Naziv smjera (obavezno).

<a name='P-Fakultet-Models-DTO-SmjerDTOInsertUpdate-brojStudenata'></a>
### brojStudenata `property`

##### Summary

Maksimalan broj studenata (mora biti između 20 i 80).

<a name='T-Fakultet-Models-DTO-SmjerDTORead'></a>
## SmjerDTORead `type`

##### Namespace

Fakultet.Models.DTO

##### Summary

DTO za čitanje podataka o smjeru.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Sifra | [T:Fakultet.Models.DTO.SmjerDTORead](#T-T-Fakultet-Models-DTO-SmjerDTORead 'T:Fakultet.Models.DTO.SmjerDTORead') | Jedinstveni identifikator smjera. |

<a name='M-Fakultet-Models-DTO-SmjerDTORead-#ctor-System-Int32,System-String,System-Nullable{System-Int32}-'></a>
### #ctor(Sifra,Naziv,brojStudenata) `constructor`

##### Summary

DTO za čitanje podataka o smjeru.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Jedinstveni identifikator smjera. |
| Naziv | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Naziv smjera. |
| brojStudenata | [System.Nullable{System.Int32}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.Int32}') | Maksimalan broj studenata na smjeru. |

<a name='P-Fakultet-Models-DTO-SmjerDTORead-Naziv'></a>
### Naziv `property`

##### Summary

Naziv smjera.

<a name='P-Fakultet-Models-DTO-SmjerDTORead-Sifra'></a>
### Sifra `property`

##### Summary

Jedinstveni identifikator smjera.

<a name='P-Fakultet-Models-DTO-SmjerDTORead-brojStudenata'></a>
### brojStudenata `property`

##### Summary

Maksimalan broj studenata na smjeru.

<a name='T-Fakultet-Models-Student'></a>
## Student `type`

##### Namespace

Fakultet.Models

##### Summary

Klasa koja predstavlja studenta.

<a name='P-Fakultet-Models-Student-Ime'></a>
### Ime `property`

##### Summary

Ime studenta.

<a name='P-Fakultet-Models-Student-Oib'></a>
### Oib `property`

##### Summary

OIB studenta.

<a name='P-Fakultet-Models-Student-Prezime'></a>
### Prezime `property`

##### Summary

Prezime studenta.

<a name='P-Fakultet-Models-Student-Rokovi'></a>
### Rokovi `property`

##### Summary

Ispitni rokovi na koje je student prijavljen.

<a name='P-Fakultet-Models-Student-Smjer'></a>
### Smjer `property`

##### Summary

Smjer kojem student pripada.

<a name='T-Fakultet-Controllers-StudentController'></a>
## StudentController `type`

##### Namespace

Fakultet.Controllers

##### Summary

Kontroler za upravljanje studentima u aplikaciji.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [T:Fakultet.Controllers.StudentController](#T-T-Fakultet-Controllers-StudentController 'T:Fakultet.Controllers.StudentController') | Instanca FakultetContext klase koja se koristi za pristup bazi podataka. |

<a name='M-Fakultet-Controllers-StudentController-#ctor-Fakultet-Data-FakultetContext,AutoMapper-IMapper-'></a>
### #ctor(context,mapper) `constructor`

##### Summary

Kontroler za upravljanje studentima u aplikaciji.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| context | [Fakultet.Data.FakultetContext](#T-Fakultet-Data-FakultetContext 'Fakultet.Data.FakultetContext') | Instanca FakultetContext klase koja se koristi za pristup bazi podataka. |
| mapper | [AutoMapper.IMapper](#T-AutoMapper-IMapper 'AutoMapper.IMapper') | Instanca IMapper sučelja koja se koristi za mapiranje objekata. |

<a name='M-Fakultet-Controllers-StudentController-Delete-System-Int32-'></a>
### Delete(sifra) `method`

##### Summary

Briše studenta prema šifri.

##### Returns

Status brisanja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra studenta. |

<a name='M-Fakultet-Controllers-StudentController-Generiraj-System-Int32-'></a>
### Generiraj(broj) `method`

##### Summary

Generira studente.

##### Returns

Status generiranja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| broj | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Broj studenata za generiranje. |

<a name='M-Fakultet-Controllers-StudentController-Get'></a>
### Get() `method`

##### Summary

Dohvaća sve studente.

##### Returns

Lista studenata.

##### Parameters

This method has no parameters.

<a name='M-Fakultet-Controllers-StudentController-GetBySifra-System-Int32-'></a>
### GetBySifra(sifra) `method`

##### Summary

Dohvaća studenta prema šifri.

##### Returns

Student sa zadanom šifrom.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra studenta. |

<a name='M-Fakultet-Controllers-StudentController-Post-Fakultet-Models-DTO-StudentDTOInsertUpdate-'></a>
### Post(dto) `method`

##### Summary

Dodaje novog studenta.

##### Returns

Status kreiranja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| dto | [Fakultet.Models.DTO.StudentDTOInsertUpdate](#T-Fakultet-Models-DTO-StudentDTOInsertUpdate 'Fakultet.Models.DTO.StudentDTOInsertUpdate') | Podatci o studentu. |

<a name='M-Fakultet-Controllers-StudentController-PostaviSliku-System-Int32,Fakultet-Models-DTO-SlikaDTO-'></a>
### PostaviSliku(sifra,slika) `method`

##### Summary

Postavlja sliku za studenta.

##### Returns

Status postavljanja slike.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra studenta. |
| slika | [Fakultet.Models.DTO.SlikaDTO](#T-Fakultet-Models-DTO-SlikaDTO 'Fakultet.Models.DTO.SlikaDTO') | Podatci o slici. |

<a name='M-Fakultet-Controllers-StudentController-Put-System-Int32,Fakultet-Models-DTO-StudentDTOInsertUpdate-'></a>
### Put(sifra,dto) `method`

##### Summary

Ažurira postojećeg studenta.

##### Returns

Status ažuriranja.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| sifra | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Šifra studenta. |
| dto | [Fakultet.Models.DTO.StudentDTOInsertUpdate](#T-Fakultet-Models-DTO-StudentDTOInsertUpdate 'Fakultet.Models.DTO.StudentDTOInsertUpdate') | Podatci o studentu. |

<a name='M-Fakultet-Controllers-StudentController-TraziStudentStranicenje-System-Int32,System-String-'></a>
### TraziStudentStranicenje(stranica,uvjet) `method`

##### Summary

Traži studente s paginacijom.

##### Returns

Lista studenata.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| stranica | [System.Int32](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Int32 'System.Int32') | Broj stranice. |
| uvjet | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Uvjet pretrage. |

<a name='M-Fakultet-Controllers-StudentController-TraziStudenta-System-String-'></a>
### TraziStudenta(uvjet) `method`

##### Summary

Traži studente prema uvjetu.

##### Returns

Lista studenata.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| uvjet | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Uvjet pretrage. |

<a name='T-Fakultet-Models-DTO-StudentDTOInsertUpdate'></a>
## StudentDTOInsertUpdate `type`

##### Namespace

Fakultet.Models.DTO

##### Summary

DTO za unos i ažuriranje studenta.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| SmjerSifra | [T:Fakultet.Models.DTO.StudentDTOInsertUpdate](#T-T-Fakultet-Models-DTO-StudentDTOInsertUpdate 'T:Fakultet.Models.DTO.StudentDTOInsertUpdate') | Šifra smjera (obavezno, mora biti između 1 i int.MaxValue). |

<a name='M-Fakultet-Models-DTO-StudentDTOInsertUpdate-#ctor-System-Nullable{System-Int32},System-String,System-String,System-String-'></a>
### #ctor(SmjerSifra,Ime,Prezime,Oib) `constructor`

##### Summary

DTO za unos i ažuriranje studenta.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| SmjerSifra | [System.Nullable{System.Int32}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.Int32}') | Šifra smjera (obavezno, mora biti između 1 i int.MaxValue). |
| Ime | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Ime studenta. Obavezno polje. |
| Prezime | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Prezime studenta. Obavezno polje. |
| Oib | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | OIB studenta. |

<a name='P-Fakultet-Models-DTO-StudentDTOInsertUpdate-Ime'></a>
### Ime `property`

##### Summary

Ime studenta. Obavezno polje.

<a name='P-Fakultet-Models-DTO-StudentDTOInsertUpdate-Oib'></a>
### Oib `property`

##### Summary

OIB studenta.

<a name='P-Fakultet-Models-DTO-StudentDTOInsertUpdate-Prezime'></a>
### Prezime `property`

##### Summary

Prezime studenta. Obavezno polje.

<a name='P-Fakultet-Models-DTO-StudentDTOInsertUpdate-SmjerSifra'></a>
### SmjerSifra `property`

##### Summary

Šifra smjera (obavezno, mora biti između 1 i int.MaxValue).

<a name='T-Fakultet-Models-DTO-StudentDTORead'></a>
## StudentDTORead `type`

##### Namespace

Fakultet.Models.DTO

##### Summary

DTO za čitanje podataka o studentu.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Sifra | [T:Fakultet.Models.DTO.StudentDTORead](#T-T-Fakultet-Models-DTO-StudentDTORead 'T:Fakultet.Models.DTO.StudentDTORead') | Jedinstveni identifikator studenta. |

<a name='M-Fakultet-Models-DTO-StudentDTORead-#ctor-System-Nullable{System-Int32},System-String,System-String,System-String,System-String,System-String-'></a>
### #ctor(Sifra,SmjerNaziv,Ime,Prezime,Oib,Slika) `constructor`

##### Summary

DTO za čitanje podataka o studentu.

##### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| Sifra | [System.Nullable{System.Int32}](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.Nullable 'System.Nullable{System.Int32}') | Jedinstveni identifikator studenta. |
| SmjerNaziv | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Naziv smjera kojem student pripada. |
| Ime | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Ime studenta. |
| Prezime | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | Prezime studenta. |
| Oib | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | OIB studenta (opcionalno). |
| Slika | [System.String](http://msdn.microsoft.com/query/dev14.query?appId=Dev14IDEF1&l=EN-US&k=k:System.String 'System.String') | URL slike studenta (opcionalno). |

<a name='P-Fakultet-Models-DTO-StudentDTORead-Ime'></a>
### Ime `property`

##### Summary

Ime studenta.

<a name='P-Fakultet-Models-DTO-StudentDTORead-Oib'></a>
### Oib `property`

##### Summary

OIB studenta (opcionalno).

<a name='P-Fakultet-Models-DTO-StudentDTORead-Prezime'></a>
### Prezime `property`

##### Summary

Prezime studenta.

<a name='P-Fakultet-Models-DTO-StudentDTORead-Sifra'></a>
### Sifra `property`

##### Summary

Jedinstveni identifikator studenta.

<a name='P-Fakultet-Models-DTO-StudentDTORead-Slika'></a>
### Slika `property`

##### Summary

URL slike studenta (opcionalno).

<a name='P-Fakultet-Models-DTO-StudentDTORead-SmjerNaziv'></a>
### SmjerNaziv `property`

##### Summary

Naziv smjera kojem student pripada.
