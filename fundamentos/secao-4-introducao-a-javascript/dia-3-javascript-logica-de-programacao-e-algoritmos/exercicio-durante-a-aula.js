// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X
// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
// 4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.
// 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

// let listaNumeros = ["Elemento 1", "Elemento 2", "Elemento 3"];
// console.log(listaNumeros);
// listaNumeros.push("Elemento X")
// console.log(listaNumeros);


// PARA CRIAR UMA LISTA DE 0 A 50:
// let listaNumeros = [];
// for (let i=0; i<=50; i++) {
//     listaNumeros.push(i)
// }
// console.log(listaNumeros);

// EXERCÍCIO 1 (SOMA TODOS OS NÚMEROS DE 1 A 50)
// let listaSoma = 0;
// for (let i=0; i<=50; i+=1) {
//     listaSoma+=i;
// }
// console.log("A soma total de 1 a 50 é: " + listaSoma);

// EXERCÍCIO 2
// Contar de 2 a 150;
// Dividir por 3;
// let oddNumbers = 0;
//     for (index=2;index<=150;index++) {
//         if (index % 3 === 0) {
//             oddNumbers +=1;
//         };
//     };
    
//     if (oddNumbers === 50)
//     {console.log(oddNumbers)}
//     else {
//         console.log("A quantidade de divisíveis por 3 neste intervalo é de: " + oddNumbers)
//     };

// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

// let playerOne = "Pedra";
// let playerTwo = "paPEl";

// if (playerOne.toLowerCase() ==="pedra" && playerTwo.toLowerCase()==="tesoura") {
//     console.log("Player 1 won")
// }
// else if (playerOne.toLowerCase() ==="pedra" && playerTwo.toLowerCase()==="papel") {
//     console.log("Player 2 won")
// }
// else if (playerOne.toLowerCase()==="papel" && playerTwo.toLowerCase()==="pedra") {
//     console.log("Player 1 won")
// }
// else if (playerOne.toLowerCase()==="papel" && playerTwo.toLowerCase()==="tesoura") {
//     console.log("Player 2 won")
// }
// else if (playerOne.toLowerCase()==="tesoura" && playerTwo.toLowerCase()==="papel") {
//     console.log("Player 1 won")
// }
// else if (playerOne.toLowerCase()==="tesoura" && playerTwo.toLowerCase()==="pedra") {
//     console.log("Player 2 won")
// }
// else {
//     console.log("A Ties")
//         };



// 4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// TERNÁRIO (SINTAXE): MINHA-CONDIÇÃO ? VALOR-TRUE : VALOR-FALSE

// let personAge = 19;

// personAge >= 18 ? console.log("A pessoa é maior de idade") : console.log("A pessoa é menor de idade")



// 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

var idadeCarolzita = 22;
var idadeMurilo = 26;
var idadeBaeta = 22;
let pessoa;

if (idadeCarolzita<idadeMurilo && idadeCarolzita<idadeBaeta)
 { pessoa = "Carolzita"
}
else if (idadeMurilo<idadeCarolzita && idadeMurilo<idadeBaeta){
    pessoa = "Murilo"
}
else if (idadeBaeta < idadeCarolzita && idadeBaeta < idadeMurilo) {
    pessoa = "Baêta"
};

if (idadeCarolzita!=idadeMurilo||idadeCarolzita!=idadeBaeta||idadeBaeta!=idadeMurilo){
    console.log(pessoa + " é a mais nova!")
}
else {
    console.log("As idades são iguais!!!")
};