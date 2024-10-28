using System.ComponentModel.DataAnnotations;

namespace Fakultet.Models.DTO
{
    /// <summary>
    /// DTO za unos i ažuriranje studenta.
    /// </summary>
    /// <param name="SmjerSifra">Šifra smjera (obavezno, mora biti između 1 i int.MaxValue).</param>
    /// <param name="Ime">Ime studenta. Obavezno polje.</param>
    /// <param name="Prezime">Prezime studenta. Obavezno polje.</param>
    /// <param name="Oib">OIB studenta.</param>
    public record StudentDTOInsertUpdate(

        [Range(1, int.MaxValue, ErrorMessage = "{0} mora biti između {1} i {2}")]
        [Required(ErrorMessage = "Smjer je obavezan")]
        int? SmjerSifra,
        [Required(ErrorMessage = "Ime obavezno")]
        string Ime,
        [Required(ErrorMessage = "Prezime obavezno")]
        string Prezime,
        string? Oib
        );
    
}
