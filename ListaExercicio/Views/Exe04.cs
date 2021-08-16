using System;

namespace ListaExercicio.Views
{
    public class Exe04
    {
        static int[] numeros = new int[100];
        public static void Renderizar()
        {
            Random random = new Random();

            //Preenchendo o array com valores aleatórios
            for (int i = 0; i < numeros.Length; i++)
            {
                numeros[i] = random.Next(1001);
            }

            //Imprimindo o array no console
            foreach (var numero in numeros)
            {
                Console.Write($"{ numero } ");
            }
            Console.WriteLine("\n\n");

            //Ordenar o vetor com o bubble sort
            bool troca = false;
            do
            {
                troca = false;
                for (int i = 0; i < numeros.Length - 1; i++)
                {
                    if (numeros[i] > numeros[i + 1])
                    {
                        int aux = numeros[i];
                        numeros[i] = numeros[i + 1];
                        numeros[i + 1] = aux;
                        troca = true;
                    }
                }
            } while (troca);

            //Imprimindo o array no console
            //Array.Sort(numeros);
            foreach (var numero in numeros)
            {
                Console.Write($"{ numero } ");
            }
        }
    }
}