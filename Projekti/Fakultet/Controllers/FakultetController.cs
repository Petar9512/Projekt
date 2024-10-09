using AutoMapper;
using Fakultet.Data;
using Microsoft.AspNetCore.Mvc;

namespace Fakultet.Controllers
{
    public abstract class FakultetController : ControllerBase
    {

        protected readonly FakultetContext _context;
        protected readonly IMapper _mapper;

        public FakultetController(FakultetContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

    }
}
