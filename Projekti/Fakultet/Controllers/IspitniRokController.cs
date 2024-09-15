using Fakultet.Data;
using Fakultet.Models;
using Microsoft.AspNetCore.Mvc;

namespace Fakultet.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class IspitniRokController : ControllerBase
    {

        private readonly FakultetContext _context;
        public IspitniRokController(FakultetContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.IspitniRok);
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public IActionResult GetBySifra(int sifra)
        {
            return Ok(_context.IspitniRok.Find(sifra));
        }

        [HttpPost]
        public IActionResult Post(IspitniRok rok)
        {
            _context.IspitniRok.Add(rok);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, rok);
        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, IspitniRok rok)
        {
            var rokBaza = _context.IspitniRok.Find(sifra);
            rokBaza.Kolegij = rok.Kolegij;
            rokBaza.VrstaIspita = rok.VrstaIspita;
            rokBaza.Datum = rok.Datum;

            _context.IspitniRok.Update(rokBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspješno promijenjeno" });
        }

        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            var rokBaza = _context.IspitniRok.Find(sifra);
            _context.IspitniRok.Remove(rokBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspješno obrisano" });
        }
    }
}

