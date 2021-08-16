using System;

namespace ListaExercicio.Views
{
    public class Exe01
    {
        private static int largura, altura, area;
        public static void Renderizar()
        {
            Console.WriteLine("Digite a altura: ");
            altura = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Digite a largura: ");
            largura = Convert.ToInt32(Console.ReadLine());
            area = largura * altura;
            Console.WriteLine($"Área total: { area }");
        }
    }
}