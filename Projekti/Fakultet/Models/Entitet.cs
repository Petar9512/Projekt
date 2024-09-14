using System.ComponentModel.DataAnnotations;

namespace Fakultet.Models
{
    public abstract class Entitet
    {
        [Key]
        public int? Sifra { get; set; }
        public string? Naziv { get; set; }
    }
}
