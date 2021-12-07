using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Data;
using System.Linq;
using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/folha")]
    public class FolhaController : ControllerBase
    {
        private readonly DataContext _context;
        public FolhaController(DataContext context)
        {
            _context = context;
        }

        // POST: api/produto/create
        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> CreateAsync([FromBody] Folha folha)
        {
            if (_context.Folhas.Where(f => f.FuncionarioId == folha.FuncionarioId && f.Mes == folha.Mes && f.Ano == folha.Ano).FirstOrDefault() != null){
                return Conflict();
            }
            _context.Folhas.Add(folha);
            await _context.SaveChangesAsync();
            return Created("", folha);
        }

        // GET: api/produto/list
        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> Array()
        {
            Folha[] folhas = _context.Folhas.ToArray();
            foreach(Folha folha in folhas){
                folha.Funcionario = _context.Funcionarios.Find(folha.FuncionarioId);
            }
            return Ok(folhas);
        }
        // Ok(await _context.Produtos.Where(p => p.CategoriaId == 1).ToListAsync());

        // GET: api/produto/getbyid/5
        [HttpGet]
        [Route("getbyid/{id}")]
        public async Task<IActionResult> GetByIdAsync([FromRoute] int id)
        {
            Produto produto = await _context.Produtos.FindAsync(id);
            if (produto != null)
            {
                return Ok(produto);
            }
            return NotFound();
        }

        // DELETE: api/produto/delete/bolacha
        [HttpDelete]
        [Route("delete/{id}")]
        public async Task<IActionResult> DeleteAsync([FromRoute] int id)
        {
            //Retorna o primeiro elemento com base na expressão lambda
            Folha folha = _context.Folhas.FirstOrDefault
            (
                folha => folha.Id == id
            );
            _context.Folhas.Remove(folha);
            await _context.SaveChangesAsync();
            return Ok();
        }

        // PUT: api/produto/delete/bolacha
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> UpdateAsync([FromBody] Produto produto)
        {
            _context.Produtos.Update(produto);
            await _context.SaveChangesAsync();
            return Ok(produto);
        }
    }
}