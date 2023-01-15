// Sorteador de loteria
// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

//Minha primeira solução:
// const numberGenerator = Math.round(Math.random() * (5-1) + 1);
// const checker = (num) => numberGenerator == num ? 'Parabéns, você ganhou!' : 'Tente novamente'

// console.log(checker(3));

//Com HOF:
const numberGenerator = Math.round(Math.random() * (5-1) + 1);
const lottery = (bet, winOrLose) => bet === winOrLose ? 'Parabéns, você ganhou!' : 'Tente novamente';

console.log(lottery(2, numberGenerator));