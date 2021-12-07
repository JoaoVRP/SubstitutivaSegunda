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
        public Funcionario Funcionario { get; set; }
        public double SalarioBruto {
            get{
                return Valor * Horas;
            }
         }
        public double Imposto {
            get{
                if (SalarioBruto<1903.98){
                    return 0;
                }
                else if (SalarioBruto<2826.65){
                    return ((SalarioBruto - INSS) * 0.075) - 142.80;
                }
                else if (SalarioBruto<3751.05){
                    return ((SalarioBruto - INSS) * 0.15) - 354.80;
                }
                else if (SalarioBruto<4664.68){
                    return ((SalarioBruto - INSS) * 0.225) - 636.13;
                }
                else
                    return ((SalarioBruto - INSS) * 0.275) - 868.36;
            }
         }
        public double INSS {
            get{
                if (SalarioBruto<1659.38){
                    return SalarioBruto * 0.08;
                }
                else if (SalarioBruto<2765.66){
                    return SalarioBruto * 0.09;
                }
                else if (SalarioBruto<5531.31){
                    return SalarioBruto * 0.11;
                }
                else
                    return 608.44;
            }
        }
        public double FGTS {
            get{
                return SalarioBruto * 0.08;
                }
                 }
    
        public double SalarioLiquido {
            get{
                return SalarioBruto - Imposto - INSS;
                } 
                }
        

    }
}
