using System.ComponentModel.DataAnnotations;

namespace Fakultet.Models.DTO
{
    ///<summary>
    /// DTO klasa koja predstavlja graf ispitnog roka.
    /// </summary>
    public record GrafIspitniRokDTO(string NazivKolegija, int UkupnoPristupnika);
}
