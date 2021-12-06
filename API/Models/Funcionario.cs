using System;

namespace API.Models
{
    public class Funcionario
    {
        //Construtor
        public Funcionario() => CriadoEm = DateTime.Now;

        //Atributos ou propriedades
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cargo { get; set; }
        public DateTime CriadoEm { get; set; }

    }
}