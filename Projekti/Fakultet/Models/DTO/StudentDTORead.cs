namespace Fakultet.Models.DTO
{
    public record StudentDTORead(

        int Sifra,
        string? SmjerNaziv,
        string Ime,
        string Prezime,
        string? Oib
        );
    
}
