namespace Fakultet.Models.DTO
{
    /// <summary>
    /// DTO za čitanje podataka o ispitnom roku.
    /// </summary>
    /// <param name="Sifra">Jedinstveni identifikator ispitnog roka.</param>
    /// <param name="KolegijNaziv">Naziv kolegija kojem ispitni rok pripada.</param>
    /// <param name="VrstaIspita">Vrsta ispita (usmeni / pismeni).</param>
    /// <param name="Datum">Vrijeme održavanja ispitnog roka.</param>
    public record IspitniRokDTORead(
        int Sifra,
        string? KolegijNaziv,
        string? VrstaIspita,
        DateTime? Datum
        );
}
