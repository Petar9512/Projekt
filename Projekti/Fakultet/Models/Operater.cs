using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Fakultet.Models
{
    public class Operater : Entitet
    {

        public string? Email { get; set; }
        public string? Lozinka { get; set; }

    }
}
