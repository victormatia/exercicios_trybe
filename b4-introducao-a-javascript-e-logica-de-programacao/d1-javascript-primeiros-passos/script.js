// // 1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// const a = 2;
// const b = 7;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

//--------------------------

// // 2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const n1 = 57;
// const n2 = 2;

// if (n1 > n2) {
//     console.log(n1);
// } else {
//     console.log(n2)
// }

//--------------------------

// // 3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.


// const n1 = 57;
// const n2 = 250;
// const n3 = 11;

// if (n1 > n2 && n1 > n3) {
//     console.log(n1);
// } else if (n2 > n1 && n2 > n3){
//     console.log(n2);
// } else {
//     console.log(n3);
// }

//--------------------------

// // 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const n = 100;

// if (n > 0) {
//     console.log("A constante 'n' é positiva!");
// } else if (n < 0) {
//     console.log("A constante 'n' é negativa!");
// } else {
//     console.log("A constante 'n' é: 0");
// }

//--------------------------

// // 5.🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// const a1 = 45;
// const a2 = 90;
// const a3 = 45;

// if ((a1 === a2 && a1 === a3 && a2 === a3) && (a1 + a2 + a3 === 180)) {
//    console.log(((a1 === a2 && a1 === a3 && a2 === a3) && (a1 + a2 + a3 === 180)) + ', O triângulo é equilátero.'); 
// } else if ((a1 === 90 || a2 === 90 || a3 === 90) && (a1 + a2 + a3 === 180)) {
//     console.log(((a1 === 90 || a2 === 90 || a3 === 90) && (a1 + a2 + a3 === 180)) + ', O triângulo é retângulo.');
// } else if (a1 !== a2 && a1 !== a3 && a2 !== a3 && (a1 + a2 + a3 === 180)) {
//     console.log((a1 !== a2 && a1 !== a3 && a2 !== a3 && (a1 + a2 + a3 === 180)) + ', O triângulo é escaleno.');
// } else {
//     console.log("Erro!")
// }   // podemos adidionar varias outras consicionais para comportar os 6 tipos de triangulos existentes, mas a logica e a mesma.

//--------------------------

// // 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// // Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// // Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// // Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// // Exemplo: bishop (bispo) -> diagonals (diagonais)

// // Adicione a peça aqui ↓↓↓

// let peca ="Galinha";

// // Obs.: não utilize acentuações.
// //------------------ 


// //----- Não altere nada abaixo dessa linha ------

// let evitadorDeErro = peca.toLowerCase() // variavel.toLowerCase converte o valor de uma string para minúsculo

// let movimentos = ['em todas as direcoes um casa por rodada', 'em diagonal uma casa por rodada', ' para esquerda', ' para a direita', ' para frente', ' para tras', 'em L uma vez por rodada', 'em todas as direcoes quantas casas quiser por rodada', 'para frente um casa por rodada']


// if (evitadorDeErro === "rei") {
//     for (let i = 0; i < movimentos.length; i += 1) {
//         if (movimentos[i] === 'em todas as direcoes um casa por rodada') {
//             console.log("Sua peça se move " + movimentos[i]);
//         } 
//     } 
// } else if (evitadorDeErro === "rainha") {
//     for (let i = 0; i < movimentos.length; i += 1) {
//         if (movimentos[i] === 'em todas as direcoes quantas casas quiser por rodada') {
//             console.log("Sua peça se move " + movimentos[i]);
//         } 
//     } 
// } else if (evitadorDeErro === "bispo") {
//     for (let i = 0; i < movimentos.length; i += 1) {
//         if (movimentos[i] === 'em diagonal uma casa por rodada') {
//             console.log("Sua peça se move " + movimentos[i]);
//         } 
//     }
// } else if (evitadorDeErro === "torre") {
//     let movimentosDaTorre = [];
//     for (let i = 0; i < movimentos.length; i += 1) {
//         if (movimentos[i] === ' para esquerda' || movimentos[i] === ' para tras' || movimentos[i] === ' para frente' || movimentos[i] === ' para a direita') {
//             movimentosDaTorre.push(movimentos[i]);
//         }
//     }
//     console.log("Sua peça se move" + movimentosDaTorre + ", uma casa por rodada.")
// } else if (evitadorDeErro === "cavalo") {
//     for (let i = 0; i < movimentos.length; i += 1) {
//         if (movimentos[i] === 'em L uma vez por rodada') {
//             console.log("Sua peça se move " + movimentos[i]);
//         } 
//     }
// } else if (evitadorDeErro === "peao") {
//     for (let i = 0; i < movimentos.length; i += 1) {
//         if (movimentos[i] === 'para frente um casa por rodada') {
//             console.log("Sua peça se move " + movimentos[i]);
//         } 
//     }
// } else {
//     console.log("Peça inválida. Tente os valores: Rei, Rainha, Bispo, Torre, Cavalo ou Peao");
// }

//--------------------------

// // 7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// // Porcentagem >= 90 -> A
// // Porcentagem >= 80 -> B
// // Porcentagem >= 70 -> C
// // Porcentagem >= 60 -> D
// // Porcentagem >= 50 -> E
// // Porcentagem < 50 -> F
// // O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

// var nota = null;

// nota = 80;

// if ((nota >= 0 && nota <= 100) && nota >= 80) {
//     console.log("Seu grau de aprovação é: " + nota + "%. Parabéns você foi aprovado!! 🚀");
// } else if ((nota >= 0 && nota <= 100) && nota < 80) {
//     console.log("Seu grau de aprovação é: " + nota + "%. Infelizmente você não atingiu os requisitos mínimos. 😿");
// } else {
//     console.log("Erro! Nota inválida");
// }

//--------------------------

// // 8.🚀 Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// // Bonus: use somente um if.

// const n1 = Math.floor(Math.random() * 10) + 1;
// const n2 = Math.floor(Math.random() * 10) + 1;
// const n3 = Math.floor(Math.random() * 10) + 1;

// // let number1 = Math.floor(Math.random() * 60) + 1;  //gerador de numero aleatorio

// if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
//     console.log("true");
// } else {
//     console.log("false");
// }

//--------------------------

// // 9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// //Bonus: use somente um if.

// const n1 = Math.floor(Math.random() * 10) + 1;
// const n2 = Math.floor(Math.random() * 10) + 1;
// const n3 = Math.floor(Math.random() * 10) + 1;


// if (n1 % 2 >= 1 || n2 % 2 >= 1 || n3 % 2 >= 1) {
//     console.log("true");
// } else {
//     console.log("false");
// }

//--------------------------

// // 10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// // Atente que, sobre o custo do produto, incide um imposto de 20%.
// // Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// // O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// // valorCustoTotal = valorCusto + impostoSobreOCusto
// // lucro = valorVenda - valorCustoTotal (lucro de um produto)

// const venda = 3;
// const custo = 1;

// const custoTotal = (custo * 0.2) + custo;



// if (venda > 0 && custoTotal > 0) {
//     console.log((venda - custoTotal) * 1000);
// } else {
//     console.log("Valor inválido")
// }

//--------------------------

// 11.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?
