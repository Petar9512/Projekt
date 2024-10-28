namespace Fakultet.Models.DTO
{
    /// <summary>
    /// DTO za čitanje podataka o studentu.
    /// </summary>
    /// <param name="Sifra">Jedinstveni identifikator studenta.</param>
    /// <param name="SmjerNaziv">Naziv smjera kojem student pripada.</param>
    /// <param name="Ime">Ime studenta.</param>
    /// <param name="Prezime">Prezime studenta.</param>
    /// <param name="Oib">OIB studenta (opcionalno).</param>
    /// <param name="Slika">URL slike studenta (opcionalno).</param>
    public record StudentDTORead(

        int? Sifra,
        string? SmjerNaziv,
        string Ime,
        string Prezime,
        string? Oib,
        string? Slika
        );
    
}
