using System.ComponentModel.DataAnnotations;

namespace Fakultet.Models.DTO
{
    /// <summary>
    /// DTO za unos i ažuriranje kolegija.
    /// </summary>
    /// <param name="SmjerSifra">Šifra smjera (obavezno, mora biti između 1 i int.MaxValue).</param>
    /// <param name="Naziv">Naziv kolegija (obavezno).</param>
    /// <param name="Predavac">Ime predavača.</param>
    /// <param name="Obavezni">Status kolegija (true = obavezni, false = izborni).</param>
    public record KolegijDTOInsertUpdate(

        [Range(1, int.MaxValue, ErrorMessage = "{0} mora biti između {1} i {2}")]
        [Required(ErrorMessage = "Smjer je obavezan")]
        int? SmjerSifra,
        [Required(ErrorMessage = "Naziv obavezan")]
        string Naziv,
        string? Predavac,
        bool? Obavezni
        );
}
