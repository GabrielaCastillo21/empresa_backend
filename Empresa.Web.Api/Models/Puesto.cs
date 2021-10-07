using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Empresa.Web.Api.Models
{
    [Table("puestos")]
    public class Puesto
    {
        [Key]
        [Column(name: "puesto_id")]
        public int PuestoId { get; set; }
        [Column(name:"puesto")]
        public string DesPuesto { get; set; }

        //public ICollection<Empleado> Empleados { get; set; }
    }
}
