// 1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
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

// 2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const n1 = 57;
// const n2 = 2;

// if (n1 > n2) {
//     console.log(n1);
// } else {
//     console.log(n2)
// }

//--------------------------

// 3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.


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


// 5.🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const a1 = 45;
const a2 = 90;
const a3 = 45;

if ((a1 === a2 && a1 === a3 && a2 === a3) && (a1 + a2 + a3 === 180)) {
   console.log(((a1 === a2 && a1 === a3 && a2 === a3) && (a1 + a2 + a3 === 180)) + ', O triângulo é equilátero.'); 
} else if ((a1 === 90 || a2 === 90 || a3 === 90) && (a1 + a2 + a3 === 180)) {
    console.log(((a1 === 90 || a2 === 90 || a3 === 90) && (a1 + a2 + a3 === 180)) + ', O triângulo é retângulo.');
} else if (a1 !== a2 && a1 !== a3 && a2 !== a3 && (a1 + a2 + a3 === 180)) {
    console.log((a1 !== a2 && a1 !== a3 && a2 !== a3 && (a1 + a2 + a3 === 180)) + ', O triângulo é escaleno.');
} else {
    console.log("Erro!")
}   // podemos adidionar varias outras consicionais para comportar os 6 tipos de triangulos existentes, mas a logica e a mesma.


