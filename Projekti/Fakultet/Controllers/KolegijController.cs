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
        public class KolegijController(FakultetContext context, IMapper mapper) : FakultetController(context, mapper)
        {

        [HttpGet]
        public ActionResult<List<KolegijDTORead>> Get()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                return Ok(_mapper.Map<List<KolegijDTORead>>(_context.Kolegiji.Include(k => k.Smjer)));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }


            [HttpGet]
            [Route("{sifra:int}")]
            public ActionResult<KolegijDTOInsertUpdate> GetBySifra(int sifra)
            {
                if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            Kolegij? e;
            try
            {
                e = _context.Kolegiji.Include(k => k.Smjer).FirstOrDefault(k => k.Sifra == sifra);
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            if (e == null)
            {
                return NotFound(new { poruka = "Kolegij ne postoji u bazi" });
            }

            return Ok(_mapper.Map<KolegijDTOInsertUpdate>(e));
            }


            [HttpPost]
            public IActionResult Post(KolegijDTOInsertUpdate dto)
            {
                if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            Smjer? es;
            try
            {
                es = _context.Smjerovi.Find(dto.SmjerSifra);
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            if (es == null)
            {
                return NotFound(new { poruka = "Smjer na kolegiju ne postoji u bazi" });
            }

            try
            {
                var e = _mapper.Map<Kolegij>(dto);
                e.Smjer = es;
                _context.Kolegiji.Add(e);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, _mapper.Map<KolegijDTORead>(e));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            }


            [HttpPut]
            [Route("{sifra:int}")]
            [Produces("application/json")]
            public IActionResult Put(int sifra, KolegijDTOInsertUpdate dto)
            {
                if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
                try
            {
                Kolegij? e;
                try
                {
                    e = _context.Kolegiji.Include(k => k.Smjer).FirstOrDefault(x => x.Sifra == sifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound(new { poruka = "Kolegij ne postoji u bazi" });
                }

                Smjer? es;
                try
                {
                    es = _context.Smjerovi.Find(dto.SmjerSifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (es == null)
                {
                    return NotFound(new { poruka = "Smjer na kolegiju ne postoji u bazi" });
                }

                e = _mapper.Map(dto, e);
                e.Smjer = es;
                _context.Kolegiji.Update(e);
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
                Kolegij? e;
                try
                {
                    e = _context.Kolegiji.Find(sifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound(new { poruka = "Kolegij ne postoji u bazi" });
                }

                _context.Kolegiji.Remove(e);
                _context.SaveChanges();
                return Ok(new { poruka = "Kolegij uspješno obrisan" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            }
        }
    }

