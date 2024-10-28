using AutoMapper;
using Fakultet.Data;
using Fakultet.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Fakultet.Controllers
{
    /// <summary>
    /// Apstraktna klasa FakultetController koja služi kao osnovna klasa za sve kontrolere u aplikaciji.
    /// </summary>
    /// <param name="context">Instanca FakultetContext klase koja se koristi za pristup bazi podataka.</param>
    /// <param name="mapper">Instanca IMapper sučelja koja se koristi za mapiranje objekata.</param>
   // [Authorize]
    public abstract class FakultetController(FakultetContext context, IMapper mapper) : ControllerBase
    {
        /// <summary>
        /// Kontekst baze podataka.
        /// </summary>
        protected readonly FakultetContext _context = context;

        /// <summary>
        /// Mapper za mapiranje objekata.
        /// </summary>
        protected readonly IMapper _mapper = mapper;
    }
}
