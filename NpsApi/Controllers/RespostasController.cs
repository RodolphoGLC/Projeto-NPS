using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NpsApi.Data;
using NpsApi.Data.DTOs;
using NpsApi.Models;

namespace NpsApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RespostasController : ControllerBase
    {
        private readonly NpsDbContext _context;

        public RespostasController(NpsDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> PostResposta(Resposta resposta)
        {
            _context.Respostas.Add(resposta);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetRespostas), new { id = resposta.Id }, resposta);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Resposta>>> GetRespostas()
        {
            return await _context.Respostas.ToListAsync();
        }

        [HttpGet("relatorio")]
        public async Task<ActionResult<object>> GetRelatorio()
        {
            var respostas = await _context.Respostas.ToListAsync();

            int total = respostas.Count;
            if (total == 0) return Ok(new { total = 0, nps = 0 });

            int promotores = respostas.Count(r => r.Avaliacao >= 4);
            int detratores = respostas.Count(r => r.Avaliacao <= 2);

            double nps = ((double)promotores / total - (double)detratores / total) * 100;

            return Ok(new
            {
                total,
                promotores,
                detratores,
                nps = Math.Round(nps, 2),
                respostas
            });
        }
    }
}
 