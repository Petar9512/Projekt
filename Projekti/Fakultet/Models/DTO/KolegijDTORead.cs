namespace Fakultet.Models.DTO
{
    public record KolegijDTORead(
        int Sifra,
        string? SmjerNaziv,
        string Naziv,
        string? Predavac,
        bool? Obavezni
        );
}
