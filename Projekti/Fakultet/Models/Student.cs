using System.ComponentModel.DataAnnotations.Schema;
namespace Fakultet.Models
{
    /// <summary>
    /// Klasa koja predstavlja studenta.
    /// </summary>
    public class Student : Entitet
    {
        /// <summary>
        /// Smjer kojem student pripada.
        /// </summary>
        [Column("smjerID")]
        [ForeignKey("smjerID")]
        public required Smjer Smjer { get; set; }

        /// <summary>
        /// Ime studenta.
        /// </summary>
        public string? Ime { get; set; }

        /// <summary>
        /// Prezime studenta.
        /// </summary>
        public string? Prezime { get; set; }

        /// <summary>
        /// OIB studenta.
        /// </summary>
        public string? Oib { get; set; }

        /// <summary>
        /// Ispitni rokovi na koje je student prijavljen.
        /// </summary>
        public ICollection<IspitniRok>? Rokovi { get; } = [];

    }
}
