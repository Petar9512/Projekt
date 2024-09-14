namespace Fakultet.Models
{
    public class IspitniRok : Entitet
    {

        public Kolegij? Kolegij { get; set; }
        public string? VrstaIspita { get; set; }
        public DateTime? Datum { get; set; }

    }
}
