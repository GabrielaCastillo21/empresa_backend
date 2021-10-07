using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Empresa.Web.Api.Models
{
    [Table("empleados")]
    public class Empleado
    {
        [Key]
        [Column(name: "empleado_id")]
        public int EmpleadoId { get; set; }
        [Column(name: "codigo")]
        public string Codigo { get; set; }
        [Column(name: "nombres")]
        public string Nombres { get; set; }
        [Column(name: "apellidos")]
        public string Apellidos { get; set; }
        [Column(name: "direccion")]
        public string Direccion { get; set; }
        [Column(name: "telefono")]
        public string Telefono { get; set; }
        [Column(name: "fecha_nacimiento", TypeName = "date")]
        public DateTime FechaNacimiento { get; set; }
        [Column(name: "puesto_id")]
        [ForeignKey("Puesto")]
        public int PuestoId { get; set; }

        public Puesto Puesto { get; set; }

    }
}
