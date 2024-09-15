using Fakultet.Data;
using Fakultet.Models;
using Microsoft.AspNetCore.Mvc;

namespace Fakultet.Controllers
{

        [ApiController]
        [Route("api/v1/[controller]")]
        public class KolegijController : ControllerBase
        {

            private readonly FakultetContext _context;
            public KolegijController(FakultetContext context)
            {
                _context = context;
            }

            [HttpGet]
            public IActionResult Get()
            {
                return Ok(_context.Kolegiji);
            }

            [HttpGet]
            [Route("{sifra:int}")]
            public IActionResult GetBySifra(int sifra)
            {
                return Ok(_context.Kolegiji.Find(sifra));
            }

            [HttpPost]
            public IActionResult Post(Kolegij kolegij)
            {
                _context.Kolegiji.Add(kolegij);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, kolegij);
            }

            [HttpPut]
            [Route("{sifra:int}")]
            [Produces("application/json")]
            public IActionResult Put(int sifra, Kolegij kolegij)
            {
                var kolegijBaza = _context.Kolegiji.Find(sifra);
                kolegijBaza.Smjer = kolegij.Smjer;
                kolegijBaza.Naziv = kolegij.Naziv;
                kolegijBaza.Predavac = kolegij.Predavac;
                kolegijBaza.Obavezni = kolegij.Obavezni;

                _context.Kolegiji.Update(kolegijBaza);
                _context.SaveChanges();

                return Ok(new { poruka = "Uspješno promijenjeno" });
            }

            [HttpDelete]
            [Route("{sifra:int}")]
            [Produces("application/json")]
            public IActionResult Delete(int sifra)
            {
                var kolegijBaza = _context.Kolegiji.Find(sifra);
                _context.Kolegiji.Remove(kolegijBaza);
                _context.SaveChanges();

                return Ok(new { poruka = "Uspješno obrisano" });
            }
        }
    }

