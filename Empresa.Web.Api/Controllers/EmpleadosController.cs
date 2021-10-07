using Empresa.Web.Api.Models;
using Empresa.Web.Api.Repositorios;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Empresa.Web.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmpleadosController : ControllerBase
    {
        private readonly Context _context;

        public EmpleadosController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Empleados.Include(e => e.Puesto).ToArray());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Empleado empleado = _context.Empleados.SingleOrDefault(e => e.EmpleadoId == id);

            if (empleado == null)
            {
                return NotFound();
            }

            return Ok(empleado);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Empleado empleado)
        {
            if (ModelState.IsValid)
            {
                _context.Empleados.Add(empleado);
                _context.SaveChanges();

                return Ok();
            }

            return BadRequest();
        }

        [HttpPut]
        public IActionResult Update([FromBody] Empleado empleado)
        {
            Empleado emp = _context.Empleados.SingleOrDefault(e => e.EmpleadoId == empleado.EmpleadoId);

            if (emp == null)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                _context.Entry(emp).CurrentValues.SetValues(empleado);
                _context.SaveChanges();

                return Ok();
            }

            return BadRequest();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Empleado empleado = _context.Empleados.SingleOrDefault(e => e.EmpleadoId == id);

            if (empleado == null)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {

                _context.Empleados.Remove(empleado);

                _context.SaveChanges();

                return Ok();
            }
            return BadRequest();
        }
    }
}
