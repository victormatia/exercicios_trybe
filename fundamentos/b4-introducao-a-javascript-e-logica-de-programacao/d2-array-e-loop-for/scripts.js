// Exercícios do dia 4.2 do bloco 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // 1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();


// for (let valores of numbers) {   // for/of identifica todos os valores de um array sem alterar o mesmo.
//     console.log(valores);
// }

//----------------------

// // 2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// for (let valores of numbers) {
//     let soma = valores + 1;
//     console.log(soma);
// }

//----------------------

// 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let soma = 0;

for (let contador = 0; contador < numbers.length; contador += 1) {
   soma += numbers[contador]; // essa linha soma "soma" com cada indice do array numbers
}

let media = soma / numbers.length

// console.log(media);

//----------------------

// 4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor que 20");
}


//----------------------

// // 5.🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// var maiorValor = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > maiorValor) {
//         maiorValor = numbers[i];
//     } 
    
// }

// console.log(maiorValor);

//----------------------

// // 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// var pares = [];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//         pares.push(numbers[i]);
//     }
// }

// console.log(pares.length);

//----------------------

// // 7.Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// var menorValor = 10;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < menorValor) {
//         menorValor = numbers[i];
//     } 
    
// }

// console.log(menorValor);

//----------------------

// // 8.Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// let numeros = [];

// for (let i = 1; i <= 25; i += 1) {
//     numeros.push(i);
// }

// console.log(numeros);

//----------------------

// // 9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

// for (let valores of numeros) {
//     console.log(valores / 2);
// } 
