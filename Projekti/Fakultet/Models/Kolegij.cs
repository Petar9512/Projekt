using System.ComponentModel.DataAnnotations.Schema;
namespace Fakultet.Models
{
    /// <summary>
    /// Klasa koja predstavlja kolegij.
    /// </summary>
    public class Kolegij : Entitet
    {
        /// <summary>
        /// Smjer kojem kolegij pripada.
        /// </summary>
        [Column("smjerID")]
        [ForeignKey("smjerID")]
        public required Smjer Smjer { get; set; }

        /// <summary>
        /// Naziv kolegija.
        /// </summary>
        public string? Naziv { get; set; }

        /// <summary>
        /// Ime predavača na kolegiju.
        /// </summary>
        public string? Predavac { get; set; }

        /// <summary>
        /// Status kolegija (obavezni / izborni).
        /// </summary>
        public bool? Obavezni { get; set; }

    }
}
