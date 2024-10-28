using System.ComponentModel.DataAnnotations.Schema;
namespace Fakultet.Models
{
    /// <summary>
    /// Klasa koja predstavlja ispitni rok.
    /// </summary>
    public class IspitniRok : Entitet
    {
        /// <summary>
        /// Kolegij kojem ispitni rok pripada.
        /// </summary>
        [Column("kolegijID")]
        [ForeignKey("kolegijID")]
        public required Kolegij Kolegij { get; set; }

        /// <summary>
        /// Vrsta ispita (usmeni / pismeni).
        /// </summary>
        public string? VrstaIspita { get; set; }

        /// <summary>
        /// Vrijeme održavanja ispitnog roka.
        /// </summary>
        public DateTime Datum { get; set; }

        /// <summary>
        /// Studenti koji su prijavljeni na ispitni rok.
        /// </summary>
        public ICollection<Student>? Pristupnici { get; set; }

    }
}
