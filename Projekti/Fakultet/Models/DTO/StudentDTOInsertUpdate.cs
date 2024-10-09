using System.ComponentModel.DataAnnotations;

namespace Fakultet.Models.DTO
{
    public record StudentDTOInsertUpdate(
        
        int? Smjer,
        [Required(ErrorMessage = "Ime obavezno")]
        string Ime,
        [Required(ErrorMessage = "Prezime obavezno")]
        string Prezime,
        string? Oib
        );
    
}
