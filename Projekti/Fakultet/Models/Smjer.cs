using System.ComponentModel.DataAnnotations.Schema;
namespace Fakultet.Models
{
    public class Smjer : Entitet
    {
        public string? Naziv { get; set; }
        public int? BrojStudenata { get; set; }

    }
}
