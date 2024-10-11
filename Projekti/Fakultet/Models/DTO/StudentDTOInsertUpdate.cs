using System.ComponentModel.DataAnnotations;

namespace Fakultet.Models.DTO
{
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
