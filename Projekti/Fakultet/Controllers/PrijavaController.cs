using Fakultet.Data;
using Fakultet.Models;
using Microsoft.AspNetCore.Mvc;

namespace Fakultet.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class PrijavaController : ControllerBase
    {

        private readonly FakultetContext _context;
        public PrijavaController(FakultetContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Prijava);
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public IActionResult GetBySifra(int sifra)
        {
            return Ok(_context.Prijava.Find(sifra));
        }

        [HttpPost]
        public IActionResult Post(Prijava prijava)
        {
            _context.Prijava.Add(prijava);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, prijava);
        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, Prijava prijava)
        {
            var prijavaBaza = _context.Prijava.Find(sifra);
            prijavaBaza.Student = prijava.Student;
            prijavaBaza.IspitniRok = prijava.IspitniRok;
            prijavaBaza.Pristupio = prijava.Pristupio;

            _context.Prijava.Update(prijavaBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspješno promijenjeno" });
        }

        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            var prijavaBaza = _context.Prijava.Find(sifra);
            _context.Prijava.Remove(prijavaBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspješno obrisano" });
        }
    }
}
