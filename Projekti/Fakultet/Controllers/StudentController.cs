using Fakultet.Data;
using Fakultet.Models;
using Microsoft.AspNetCore.Mvc;

namespace Fakultet.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly FakultetContext _context;
        public StudentController(FakultetContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Studenti);
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public IActionResult GetBySifra(int sifra)
        {
            return Ok(_context.Studenti.Find(sifra));
        }

        [HttpPost]
        public IActionResult Post(Student student)
        {
            _context.Studenti.Add(student);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, student);
        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, Student student)
        {
            var studentBaza = _context.Studenti.Find(sifra);
            studentBaza.Smjer = student.Smjer;
            studentBaza.Ime = student.Ime;
            studentBaza.Prezime = student.Prezime;
            studentBaza.Oib = student.Oib;

            _context.Studenti.Update(studentBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspješno promijenjeno" });
        }

        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            var studentBaza = _context.Studenti.Find(sifra);
            _context.Studenti.Remove(studentBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspješno obrisano" });
        }
    }
}
