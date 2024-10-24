using System.ComponentModel.DataAnnotations;

namespace Fakultet.Models.DTO
{
    /// <param name="email">Email operatera.</param>
    /// <param name="password">Lozinka operatera.</param>
    public record OperaterDTO(
        [Required(ErrorMessage = "Email je obavezan")]
        string? email,
        [Required(ErrorMessage = "Lozinka je obavezna")]
        string? password
        );
}
