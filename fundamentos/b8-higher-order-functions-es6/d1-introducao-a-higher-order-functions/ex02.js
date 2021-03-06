// #2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const gerateNumber = () => Math.floor(Math.random() * 5);

const verifyNumber = (num) => num === gerateNumber() ? `Parabéns você ganhou` : `Tente novamente`;

const returnResult = (num, verify) => verify(num);

console.log(returnResult(2, verifyNumber));
