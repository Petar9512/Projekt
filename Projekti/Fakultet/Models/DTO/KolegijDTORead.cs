namespace Fakultet.Models.DTO
{
    /// <summary>
    /// DTO za čitanje podataka o kolegiju.
    /// </summary>
    /// <param name="Sifra">Jedinstveni identifikator kolegija.</param>
    /// <param name="SmjerNaziv">Naziv smjera kojem kolegij pripada.</param>
    /// <param name="Naziv">Naziv kolegija.</param>
    /// <param name="Predavac">Ime predavača kolegija.</param>
    /// <param name="Obavezni">Status kolegija (obavezni / izborni).</param>
    public record KolegijDTORead(
        int Sifra,
        string? SmjerNaziv,
        string Naziv,
        string? Predavac,
        bool? Obavezni
        );
}
