using System.ComponentModel.DataAnnotations;

namespace Fakultet.Models.DTO
{
    public record IspitniRokDTOInsertUpdate(
        [Range(1, int.MaxValue, ErrorMessage = "{0} mora biti između {1} i {2}")]
        [Required(ErrorMessage = "Kolegij je obavezan")]
        int? KolegijSifra,
        string? VrstaIspita,
        DateTime? Datum
        );
}
