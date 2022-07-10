1. 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.
- Modifique a estrutura da função para que ela seja uma arrow function;
- Modifique as variáveis para que respeitem o escopo onde estão declaradas;
- Modifique as concatenações para template literals.

Copie o código abaixo:

  function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

-----------------------------------------------------------------------------------------------------------------------

2. 🚀 Crie uma função que retorne um array em ordem crescente.

Copie o código abaixo:

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 😉

- Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
- Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma     crescente!'.
- Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".