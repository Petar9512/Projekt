using System.ComponentModel.DataAnnotations.Schema;
namespace Fakultet.Models
{
    public class Prijava : Entitet
    {

        public Student? Student { get; set; }
        public IspitniRok? IspitniRok { get; set; }
        public bool? Pristupio { get; set; }

    }
}
