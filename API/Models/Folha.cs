using System;

namespace API.Models
{
    public class Folha
    {
        //Construtor
        public Folha() => CriadoEm = DateTime.Now;

        //Atributos ou propriedades
        public int Id { get; set; }
        public int FuncionarioId { get; set; }
        public int Ano { get; set; }
        public int Mes { get; set; }
        public int Valor { get; set; }
        public int Horas { get; set; }
        public DateTime CriadoEm { get; set; }

    }
}