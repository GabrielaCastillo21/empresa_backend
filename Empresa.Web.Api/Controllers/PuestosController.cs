using Empresa.Web.Api.Models;
using Empresa.Web.Api.Repositorios;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Empresa.Web.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PuestosController : ControllerBase
    {
        private readonly Context _context;

        public PuestosController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Puestos.ToArray());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Puesto puesto = _context.Puestos.SingleOrDefault(p => p.PuestoId == id);

            if (puesto == null)
            {
                return NotFound();
            }

            return Ok(puesto);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Puesto puesto)
        {
            if (ModelState.IsValid)
            {
                _context.Puestos.Add(puesto);
                _context.SaveChanges();

                return Ok();
            }

            return BadRequest();
        }

        [HttpPut]
        public IActionResult Update([FromBody] Puesto puesto)
        {
            Puesto pue = _context.Puestos.SingleOrDefault(p => p.PuestoId == puesto.PuestoId);

            if (pue == null)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                _context.Entry(pue).CurrentValues.SetValues(puesto);
                _context.SaveChanges();

                return Ok();
            }

            return BadRequest();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Puesto puesto = _context.Puestos.SingleOrDefault(p => p.PuestoId == id);

            if (puesto == null)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {

                _context.Puestos.Remove(puesto);

                _context.SaveChanges();

                return Ok();
            }
            return BadRequest();
        }
    }
}
