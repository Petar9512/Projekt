using AutoMapper;
using Fakultet.Data;
using Fakultet.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Fakultet.Controllers
{
   // [Authorize]
    public abstract class FakultetController(FakultetContext context, IMapper mapper) : ControllerBase
    {
        protected readonly FakultetContext _context = context;
        protected readonly IMapper _mapper = mapper;
    }
}
