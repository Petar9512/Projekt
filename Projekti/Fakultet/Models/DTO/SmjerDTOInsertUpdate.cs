using System.ComponentModel.DataAnnotations;

namespace Fakultet.Models.DTO
{
    /// <summary>
    /// DTO za unos i ažuriranje smjera.
    /// </summary>
    /// <param name="Naziv">Naziv smjera (obavezno).</param>
    /// <param name="brojStudenata">Maksimalan broj studenata (mora biti između 20 i 80).</param>
    public record SmjerDTOInsertUpdate(

        [Required(ErrorMessage = "Naziv obavezan")]
        string Naziv,
        [Range(20, 80, ErrorMessage = "{0} mora biti između {1} i {2}")]
        int? brojStudenata
        );

}
