using System.ComponentModel.DataAnnotations.Schema;

namespace Fakultet.Models
{
    /// <summary>
    /// Predstavlja smjer u sustavu.
    /// </summary>
    public class Smjer : Entitet
    {
        /// <summary>
        /// Naziv smjera.
        /// </summary>
        public string? Naziv { get; set; }

        /// <summary>
        /// Maksimalan broj studenata na smjeru.
        /// </summary>
        public int? BrojStudenata { get; set; }

    }
}
