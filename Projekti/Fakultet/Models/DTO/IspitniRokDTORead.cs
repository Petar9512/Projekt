namespace Fakultet.Models.DTO
{
    public record IspitniRokDTORead(
        int Sifra,
        string? KolegijNaziv,
        string? VrstaIspita,
        DateTime? Datum
        );
}
