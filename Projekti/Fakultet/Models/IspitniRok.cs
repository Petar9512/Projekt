using System.ComponentModel.DataAnnotations.Schema;
namespace Fakultet.Models
{
    public class IspitniRok : Entitet
    {
        [Column("kolegijID")]
        public int? Kolegij { get; set; }
        public string? VrstaIspita { get; set; }
        public DateTime? Datum { get; set; }

    }
}
