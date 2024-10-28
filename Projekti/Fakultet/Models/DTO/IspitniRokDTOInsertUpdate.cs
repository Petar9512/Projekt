using System.ComponentModel.DataAnnotations;

namespace Fakultet.Models.DTO
{
    /// <summary>
    /// DTO za unos i ažuriranje ispitnog roka.
    /// </summary>
    /// <param name="KolegijSifra">Šifra kolegija (obavezno, mora biti između 1 i int.MaxValue).</param>
    /// <param name="VrstaIspita">Vrsta ispita (usmeni / pismeni).</param>
    /// <param name="Datum">Vrijeme održavanja ispitnog roka.</param>
    public record IspitniRokDTOInsertUpdate(
        [Range(1, int.MaxValue, ErrorMessage = "{0} mora biti između {1} i {2}")]
        [Required(ErrorMessage = "Kolegij je obavezan")]
        int? KolegijSifra,
        string? VrstaIspita,
        DateTime? Datum
        );
}
