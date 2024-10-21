using System.ComponentModel.DataAnnotations;

namespace Fakultet.Models.DTO
{
    public record SlikaDTO([Required(ErrorMessage = "Base64 zapis slike obavezan")] string Base64);

}
