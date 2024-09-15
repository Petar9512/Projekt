using Fakultet.Models;
using Microsoft.EntityFrameworkCore;

namespace Fakultet.Data
{
    public class FakultetContext : DbContext
    {
        public FakultetContext(DbContextOptions<FakultetContext> options) : base(options) { }

        public DbSet<Smjer> Smjerovi { get; set; }
        public DbSet<Kolegij> Kolegiji { get; set; }
        public DbSet<Student> Studenti { get; set; }
        public DbSet<IspitniRok> IspitniRok { get; set; }
        public DbSet<Prijava> Prijava { get; set; }
    }
}
