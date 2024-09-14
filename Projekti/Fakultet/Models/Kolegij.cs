namespace Fakultet.Models
{
    public class Kolegij : Entitet
    {

        public Smjer? Smjer { get; set; }
        public string? Predavac { get; set; }
        public bool? Obavezni { get; set; }

    }
}
