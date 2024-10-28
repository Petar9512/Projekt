﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Fakultet.Models
{
    /// <summary>
    /// Operater koji se koristi za prijavu u sustav.
    /// </summary>
    public class Operater : Entitet
    {
        /// <summary>
        /// Email operatera.
        /// </summary>
        public string? Email { get; set; }

        /// <summary>
        /// Lozinka operatera.
        /// </summary>
        public string? Lozinka { get; set; }

    }
}
