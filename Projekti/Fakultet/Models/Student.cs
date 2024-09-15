﻿using System.ComponentModel.DataAnnotations.Schema;
namespace Fakultet.Models
{
    public class Student : Entitet
    {
        [Column("smjerID")]
        public int? Smjer { get; set; }
        public string? Ime { get; set; }
        public string? Prezime { get; set; }
        public string? Oib { get; set; }

    }
}
