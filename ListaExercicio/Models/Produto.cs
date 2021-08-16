namespace ListaExercicio.Models
{
    public class Produto
    {
        public Produto() { }
        public Produto(string nome, double preco, int quantidade)
        {
            Nome = nome;
            Preco = preco;
            Quantidade = quantidade;
        }

        public string Nome { get; set; }
        public double Preco { get; set; }
        public int Quantidade { get; set; }

        public override string ToString()
        {
            return $"Nome: { Nome } \nPreço: { Preco.ToString("C2") }";
        }
    }
}