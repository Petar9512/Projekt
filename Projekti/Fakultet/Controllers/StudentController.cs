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
    public class StudentController(FakultetContext context, IMapper mapper) : FakultetController(context, mapper)
    {

        [HttpGet]
        public ActionResult<List<StudentDTORead>> Get()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                return Ok(_mapper.Map<List<StudentDTORead>>(_context.Studenti.Include(g => g.Smjer)));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public ActionResult<StudentDTOInsertUpdate> GetBySifra(int sifra)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            Student? e;
            try
            {
                e = _context.Studenti.Include(s => s.Smjer).FirstOrDefault(s => s.Sifra == sifra);
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
            if (e == null)
            {
                return NotFound(new { poruka = "Student ne postoji u bazi" });
            }
            return Ok(_mapper.Map<StudentDTOInsertUpdate>(e));
        }

        [HttpPost]
        public IActionResult Post(StudentDTOInsertUpdate dto)
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
                return NotFound(new { poruka = "Smjer na studentu ne postoji u bazi" });
            }

            try
            {
                var e = _mapper.Map<Student>(dto);
                e.Smjer = es;
                _context.Studenti.Add(e);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, _mapper.Map<StudentDTORead>(e));
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, StudentDTOInsertUpdate dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { poruka = ModelState });
            }
            try
            {
                Student? e;
                try
                {
                    e = _context.Studenti.Include(s => s.Smjer).FirstOrDefault(x => x.Sifra == sifra);
                }
                catch (Exception ex) 
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound(new { poruka = "Student ne postoji u bazi" });
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
                    return NotFound(new { poruka = "Smjer na studentu ne postoji u bazi" });
                }

                e = _mapper.Map(dto, e);
                e.Smjer = es;
                _context.Studenti.Update(e);
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
                Student? e;
                try
                {
                    e = _context.Studenti.Find(sifra);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { poruka = ex.Message });
                }
                if (e == null)
                {
                    return NotFound(new { poruka = "Student ne postoji u bazi" });
                }

                _context.Studenti.Remove(e);
                _context.SaveChanges();
                return Ok(new { poruka = "Uspješno obrisano" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }
    }
}
