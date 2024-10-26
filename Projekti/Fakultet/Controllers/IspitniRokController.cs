using AutoMapper;
using Fakultet.Data;
using Fakultet.Models;
using Fakultet.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Fakultet.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class IspitniRokController(FakultetContext context, IMapper mapper) : FakultetController(context, mapper)
    {

        [HttpGet]
        public ActionResult<List<IspitniRokDTORead>> Get()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                return Ok(_mapper.Map<List<IspitniRokDTORead>>(_context.IspitniRok.Include(i => i.Kolegij)));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }


        [HttpGet]
        [Route("{sifra:int}")]
        public ActionResult<IspitniRokDTOInsertUpdate> GetBySifra(int sifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            IspitniRok? e;
            try
            {
                e = _context.IspitniRok.Include(i => i.Kolegij).FirstOrDefault(i => i.Sifra == sifra);
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            if (e == null)
            {
                return NotFound(new { poruka = "Ispitni rok ne postoji u bazi" });
            }

            return Ok(_mapper.Map<IspitniRokDTOInsertUpdate>(e));
        }


        [HttpPost]
        public IActionResult Post(IspitniRokDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            Kolegij? es;
            try
            {
                es = _context.Kolegiji.Find(dto.KolegijSifra);
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            if (es == null)
            {
                return NotFound(new { poruka = "Kolegij na ispitnom roku ne postoji u bazi" });
            }

            try
            {
                var e = _mapper.Map<IspitniRok>(dto);
                e.Kolegij = es;
                _context.IspitniRok.Add(e);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, _mapper.Map<IspitniRokDTORead>(e));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }


        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, IspitniRokDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                IspitniRok? e;
                try
                {
                    e = _context.IspitniRok.Include(i => i.Kolegij).FirstOrDefault(x => x.Sifra == sifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound(new { poruka = "Ispitni rok ne postoji u bazi" });
                }

                Kolegij? es;
                try
                {
                    es = _context.Kolegiji.Find(dto.KolegijSifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (es == null)
                {
                    return NotFound(new { poruka = "Kolegij na ispitnom roku ne postoji u bazi" });
                }

                e = _mapper.Map(dto, e);
                e.Kolegij = es;
                _context.IspitniRok.Update(e);
                _context.SaveChanges();

                return Ok(new { poruka = "Uspješno promijenjeno" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }


        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                IspitniRok? e;
                try
                {
                    e = _context.IspitniRok.Find(sifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound(new { poruka = "Ispitni rok ne postoji u bazi" });
                }

                _context.IspitniRok.Remove(e);
                _context.SaveChanges();
                return Ok(new { poruka = "Ispitni rok uspješno obrisan" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }


        [HttpGet]
        [Route("Studenti/{sifraRoka:int}")]
        public ActionResult<List<StudentDTORead>> GetPristupnici(int sifraRoka)
        {
            if (!ModelState.IsValid || sifraRoka <= 0)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var p = _context.IspitniRok
                    .Include(i => i.Pristupnici)
                    .ThenInclude(i => i.Smjer)
                    .FirstOrDefault(x => x.Sifra == sifraRoka);
                if (p == null)
                {
                    return BadRequest("Ne postoji ispitni rok sa šifrom " + sifraRoka + " u bazi");
                }
                return Ok(_mapper.Map<List<StudentDTORead>>(p.Pristupnici));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }


        [HttpPost]
        [Route("{sifra:int}/dodaj/{studentSifra:int}")]
        public IActionResult DodajPristupnika(int sifra, int studentSifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (sifra <= 0 || studentSifra <= 0)
            {
                return BadRequest("Šifra ispitnog roka ili studenta nije točna");
            }
            try
            {
                var rok = _context.IspitniRok
                    .Include(r => r.Pristupnici).FirstOrDefault(r => r.Sifra == sifra);
                if (rok == null)
                {
                    return BadRequest("Ne postoji ispitni rok sa šifrom " + sifra + " u bazi");
                }

                var pristupnik = _context.Studenti.Find(studentSifra);
                if (pristupnik == null)
                {
                    return BadRequest("Ne postoji student sa šifrom " + studentSifra + " u bazi");
                }

                rok.Pristupnici.Add(pristupnik);
                _context.IspitniRok.Update(rok);
                _context.SaveChanges();
                return Ok(new { poruka = "Student " + pristupnik.Prezime + " " + pristupnik.Ime + " dodan u ispitni rok - " + rok.Datum});
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }


        [HttpDelete]
        [Route("{sifra:int}/obrisi/{studentSifra:int}")]
        public IActionResult ObrisiPolaznika(int sifra, int studentSifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (sifra <= 0 || studentSifra <= 0)
            {
                return BadRequest("Šifra ispitnog roka ili studenta nije točna");
            }
            try
            {
                var rok = _context.IspitniRok
                    .Include(r => r.Pristupnici).FirstOrDefault(r => r.Sifra == sifra);
                if (rok == null)
                {
                    return BadRequest("Ne postoji ispitni rok sa šifrom " + sifra + " u bazi");
                }

                var pristupnik = _context.Studenti.Find(studentSifra);
                if (pristupnik == null)
                {
                    return BadRequest("Ne postoji student sa šifrom " + studentSifra + " u bazi");
                }
                rok.Pristupnici.Remove(pristupnik);
                _context.IspitniRok.Update(rok);
                _context.SaveChanges();
                return Ok(new { poruka = "Student " + pristupnik.Prezime + " " + pristupnik.Ime + " obrisan iz ispitnog roka - " + rok.Datum });
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }

        [HttpGet]
        [Route("GrafIspitnogRoka")]
        public ActionResult<List<GrafIspitniRokDTO>> GrafIspitnogRoka()
        {
            try
            {
                return Ok(_mapper.Map<List<GrafIspitniRokDTO>>(_context.IspitniRok.Include(i => i.Kolegij)
                    .Include(i => i.Pristupnici)));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }
    }
}

