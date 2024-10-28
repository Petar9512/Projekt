using AutoMapper;
using Fakultet.Data;
using Fakultet.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Fakultet.Controllers
{
    /// <summary>
    /// Kontroler za početne operacije.
    /// </summary>
    /// <param name="_context">Kontekst baze podataka.</param>
    /// <param name="_mapper">Mapper za mapiranje objekata.</param>
    [ApiController]
    [Route("api/v1/[controller]")]
    public class PocetnaController(FakultetContext _context, IMapper _mapper) : ControllerBase
    {
        /// <summary>
        /// Dohvaća dostupne ispitne rokove.
        /// </summary>
        /// <returns>Lista dostupnih rokova.</returns>
        [HttpGet]
        [Route("DostupniRokovi")]
        public ActionResult<List<IspitniRokDTORead>> DostupniRokovi()
        {
            try
            {
                var rokovi = _context.IspitniRok.Include(i => i.Kolegij)
                    .ToList();

                var lista = new List<object>();
                foreach (var rok in rokovi)
                {
                    lista.Add(new { KolegijNaziv = rok.Kolegij.Naziv, Datum = rok.Datum });
                }

                return Ok(lista);
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }

        /// <summary>
        /// Dohvaća ukupan broj studenata.
        /// </summary>
        /// <returns>Ukupan broj studenata.</returns>
        [HttpGet]
        [Route("UkupnoStudenata")]
        public IActionResult UkupnoStudenata()
        {
            try
            {
                return Ok(new { poruka = _context.Studenti.Count() });
            }
            catch (Exception ex)
            {
                return BadRequest(new { poruka = ex.Message });
            }
        }
    }
}
