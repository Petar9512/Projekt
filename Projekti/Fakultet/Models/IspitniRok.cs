using System.ComponentModel.DataAnnotations.Schema;
namespace Fakultet.Models
{
    public class IspitniRok : Entitet
    {
        [Column("kolegijID")]
        [ForeignKey("kolegijID")]
        public required Kolegij Kolegij { get; set; }
        public string? VrstaIspita { get; set; }
        public DateTime? Datum { get; set; }
        public ICollection<Student>? Pristupnici { get; set; }

    }
}
