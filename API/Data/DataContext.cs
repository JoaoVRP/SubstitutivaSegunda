using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        //Construtor
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        // Lista de propriedades que serão transformadas em tabelas no banco de dados
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Funcionario> Funcionarios { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<ItemVenda> ItensVenda { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Folha> Folhas { get; set; }
    }
}