namespace Fakultet.Models.DTO
{
    /// <summary>
    /// DTO za čitanje podataka o smjeru.
    /// </summary>
    /// <param name="Sifra">Jedinstveni identifikator smjera.</param>
    /// <param name="Naziv">Naziv smjera.</param>
    /// <param name="brojStudenata">Maksimalan broj studenata na smjeru.</param>
    public record SmjerDTORead(

        int Sifra,
        string Naziv,
        int? brojStudenata
        );
    
}
