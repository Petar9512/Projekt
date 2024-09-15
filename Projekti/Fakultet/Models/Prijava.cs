using System.ComponentModel.DataAnnotations.Schema;
namespace Fakultet.Models
{
    public class Prijava : Entitet
    {
        [Column("studentID")]
        public int? Student { get; set; }
        [Column("ispitniRokID")]
        public int? IspitniRok { get; set; }
        public bool? Pristupio { get; set; }

    }
}
