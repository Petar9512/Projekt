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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>().HasOne(s => s.Smjer);
            modelBuilder.Entity<Kolegij>().HasOne(k => k.Smjer);
            modelBuilder.Entity<IspitniRok>().HasOne(i => i.Kolegij);

            modelBuilder.Entity<IspitniRok>()
                .HasMany(i => i.Pristupnici)
                .WithMany(p => p.Rokovi)
                .UsingEntity<Dictionary<string, object>>("Prijava",
                e => e.HasOne<Student>().WithMany().HasForeignKey("studentID"),
                e => e.HasOne<IspitniRok>().WithMany().HasForeignKey("ispitniRokID"),
                c => c.ToTable("Prijava")
                );
        }
    }
}
