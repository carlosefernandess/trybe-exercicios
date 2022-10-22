// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)
let userInput = "QuEeN"
let moveOutput = ""

let outputTextError = "Error! Your input '" + userInput + "' is invalid! Verify your tiping and try again!"

switch (userInput.toLocaleLowerCase()) {
    case "king":
        moveOutput = "King -> One square - Any direction";
        break
    case "queen":
        moveOutput = "Queen -> Any number of squares - Diagonals, Horizontals or Verticals";
        break
    case "rook":
        moveOutput = "Rook -> Any number of squares - Horizontals, Verticals";
        break
    case "bishop":
        moveOutput = "Bishop -> Any number of squares - Diagonals";
        break
    case "knights":
        moveOutput = "Knights -> One move in 'L' shape - Any direction in 'L' shape - *Can jump over other pieces";
        break
    case "pawns":
        moveOutput = "Pawns -> One or Two moves if have not moved yet. If they have, One move only - Vertically forward";
        break
        default:
        console.log(outputTextError)
};
console.log(moveOutput);
