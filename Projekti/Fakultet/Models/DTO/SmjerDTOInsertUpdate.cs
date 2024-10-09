using System.ComponentModel.DataAnnotations;

namespace Fakultet.Models.DTO
{
    public record SmjerDTOInsertUpdate(

        [Required(ErrorMessage = "Naziv obavezan")]
        string Naziv,
        int? brojStudenata
        );

}
