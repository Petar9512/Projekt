using System.ComponentModel.DataAnnotations;

namespace Fakultet.Models.DTO
{
    public record SmjerDTOInsertUpdate(

        [Required(ErrorMessage = "Naziv obavezan")]
        string Naziv,
        [Range(20, 80, ErrorMessage = "{0} mora biti između {1} i {2}")]
        int? brojStudenata
        );

}
