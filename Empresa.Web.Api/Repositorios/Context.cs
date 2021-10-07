using Empresa.Web.Api.Models;
using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Empresa.Web.Api.Repositorios
{
    public class Context : Microsoft.EntityFrameworkCore.DbContext
    {
        public DbSet<Empleado> Empleados { get; set; }
        public DbSet<Puesto> Puestos { get; set; }

        public Context( DbContextOptions<Context> options) : base(options)
        {

        }

    }
}
