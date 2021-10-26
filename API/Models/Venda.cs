using System;
using System.Collections.Generic;

namespace API.Models
{
    public class Venda
    {
        public int Id { get; set; }
        public string Usuario { get; set; }
        public List<ItemVenda> Produtos { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}