using AutoMapper;
using Fakultet.Data;
using Fakultet.Models;
using Fakultet.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace Fakultet.Controllers
{
    /// <summary>
    /// Kontroler za upravljanje studentima u aplikaciji.
    /// </summary>
    /// <param name="context">Instanca FakultetContext klase koja se koristi za pristup bazi podataka.</param>
    /// <param name="mapper">Instanca IMapper sučelja koja se koristi za mapiranje objekata.</param>
    [ApiController]
    [Route("api/v1/[controller]")]
    public class StudentController(FakultetContext context, IMapper mapper) : FakultetController(context, mapper)
    {
        /// <summary>
        /// Dohvaća sve studente.
        /// </summary>
        /// <returns>Lista studenata.</returns>
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

        /// <summary>
        /// Dohvaća studenta prema šifri.
        /// </summary>
        /// <param name="sifra">Šifra studenta.</param>
        /// <returns>Student sa zadanom šifrom.</returns>
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

        /// <summary>
        /// Dodaje novog studenta.
        /// </summary>
        /// <param name="dto">Podatci o studentu.</param>
        /// <returns>Status kreiranja.</returns>
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

        /// <summary>
        /// Ažurira postojećeg studenta.
        /// </summary>
        /// <param name="sifra">Šifra studenta.</param>
        /// <param name="dto">Podatci o studentu.</param>
        /// <returns>Status ažuriranja.</returns>
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

        /// <summary>
        /// Briše studenta prema šifri.
        /// </summary>
        /// <param name="sifra">Šifra studenta.</param>
        /// <returns>Status brisanja.</returns>
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

        /// <summary>
        /// Traži studente prema uvjetu.
        /// </summary>
        /// <param name="uvjet">Uvjet pretrage.</param>
        /// <returns>Lista studenata.</returns>
        [HttpGet]
        [Route("trazi/{uvjet}")]
        public ActionResult<List<StudentDTORead>> TraziStudenta(string uvjet)
        {
            if (uvjet == null || uvjet.Length < 3)
            {
                return BadRequest(ModelState);
            }
            uvjet = uvjet.ToLower();
            try
            {
                IEnumerable<Student> query = _context.Studenti.Include(s => s.Smjer);
                var niz = uvjet.Split(" ");
                foreach (var s in uvjet.Split(" "))
                {
                    query = query.Where(p => p.Ime.ToLower().Contains(s) || p.Prezime.ToLower().Contains(s));
                }
                var studenti = query.ToList();
                return Ok(_mapper.Map<List<StudentDTORead>>(studenti));
            }
            catch (Exception e)
            {
                return BadRequest(new { poruka = e.Message });
            }
        }

        /// <summary>
        /// Traži studente s paginacijom.
        /// </summary>
        /// <param name="stranica">Broj stranice.</param>
        /// <param name="uvjet">Uvjet pretrage.</param>
        /// <returns>Lista studenata.</returns>
        [HttpGet]
        [Route("traziStranicenje/{stranica}")]
        public IActionResult TraziStudentStranicenje(int stranica, string uvjet = "")
        {
            var poStranici = 4;
            uvjet = uvjet.ToLower();
            try
            {
                IEnumerable<Student> query = _context.Studenti.Include(s => s.Smjer).Skip((poStranici * stranica) - poStranici);
                    
                var niz = uvjet.Split(" ");
                foreach (var p in uvjet.Split(" "))
                {
                    query = query.Where(s => s.Ime.ToLower().Contains(p) || s.Prezime.ToLower().Contains(p));
                }
                query.Take(poStranici)
                    .OrderBy(s => s.Prezime);
                var studenti = query.ToList();
                return Ok(_mapper.Map<List<StudentDTORead>>(studenti));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        /// <summary>
        /// Postavlja sliku za studenta.
        /// </summary>
        /// <param name="sifra">Šifra studenta.</param>
        /// <param name="slika">Podatci o slici.</param>
        /// <returns>Status postavljanja slike.</returns>
        [HttpPut]
        [Route("postaviSliku/{sifra:int}")]
        public IActionResult PostaviSliku(int sifra, SlikaDTO slika)
        {
            if (sifra <= 0)
            {
                return BadRequest("Šifra mora biti veća od nule (0)");
            }
            if (slika.Base64 == null || slika.Base64?.Length == 0)
            {
                return BadRequest("Slika nije postavljena");
            }
            var s = _context.Studenti.Find(sifra);
            if (s == null)
            {
                return BadRequest("Ne postoji student sa šifrom " + sifra + ".");
            }
            try
            {
                var ds = Path.DirectorySeparatorChar;
                string dir = Path.Combine(Directory.GetCurrentDirectory()
                    + ds + "wwwroot" + ds + "slike" + ds + "studenti");

                if (!System.IO.Directory.Exists(dir))
                {
                    System.IO.Directory.CreateDirectory(dir);
                }
                var putanja = Path.Combine(dir + ds + sifra + ".jpg");
                System.IO.File.WriteAllBytes(putanja, Convert.FromBase64String(slika.Base64!));
                return Ok("Uspješno pohranjena slika");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

       /* [HttpGet]
        [Route("Generiraj/{broj:int}")]
        public IActionResult Generiraj(int broj)
        {
            Student s;
            for (int i = 0; i < broj; i++)
            {
                s = new Student()
                {
                    Ime = Faker.Name.First(),
                    Prezime = Faker.Name.Last()
                };
                _context.Studenti.Add(s);
                _context.SaveChanges();
            }
            return Ok();
        } */
    }
}
