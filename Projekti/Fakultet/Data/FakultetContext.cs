using Fakultet.Models;
using Microsoft.EntityFrameworkCore;

namespace Fakultet.Data
{
    /// <summary>
    /// Kontekst baze podataka za aplikaciju Fakultet.
    /// </summary>
    /// <remarks>
    /// Konstruktor koji prima opcije za konfiguraciju konteksta.
    /// </remarks>
    /// <param name="options">Opcije za konfiguraciju konteksta.</param>
    public class FakultetContext(DbContextOptions<FakultetContext> options) : DbContext(options)
    {
        /// <summary>
        /// Skup podataka za entitet Smjer.
        /// </summary>
        public DbSet<Smjer> Smjerovi { get; set; }
        /// <summary>
        /// Skup podataka za entitet Kolegij.
        /// </summary>
        public DbSet<Kolegij> Kolegiji { get; set; }
        /// <summary>
        /// Skup podataka za entitet Student.
        /// </summary>
        public DbSet<Student> Studenti { get; set; }
        /// <summary>
        /// Skup podataka za entitet IspitniRok.
        /// </summary>
        public DbSet<IspitniRok> IspitniRok { get; set; }
        /// <summary>
        /// Skup podataka za entitet Operater.
        /// </summary>
        public DbSet<Operater> Operateri { get; set; }

        /// <summary>
        /// Konfiguracija modela prilikom kreiranja baze podataka.
        /// </summary>
        /// <param name="modelBuilder">Graditelj modela.</param>
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
