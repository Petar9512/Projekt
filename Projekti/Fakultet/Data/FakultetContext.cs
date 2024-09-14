using Microsoft.EntityFrameworkCore;

namespace Fakultet.Data
{
    public class FakultetContext : DbContext
    {
        public FakultetContext(DbContextOptions<FakultetContext> options) : base(options) { }
    }
}
