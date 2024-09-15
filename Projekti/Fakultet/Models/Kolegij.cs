﻿using System.ComponentModel.DataAnnotations.Schema;
namespace Fakultet.Models
{
    public class Kolegij : Entitet
    {
        [Column("smjerID")]
        public int? Smjer { get; set; }
        public string? Naziv { get; set; }
        public string? Predavac { get; set; }
        public bool? Obavezni { get; set; }

    }
}
