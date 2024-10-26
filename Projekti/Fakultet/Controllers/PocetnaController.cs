using AutoMapper;
using Fakultet.Data;
using Fakultet.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Fakultet.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class PocetnaController(FakultetContext _context, IMapper _mapper) : ControllerBase
    {

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
