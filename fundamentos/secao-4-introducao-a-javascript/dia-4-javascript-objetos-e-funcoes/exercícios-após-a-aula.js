// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindromeTester (receivedWord) {
//ignora maiúsculas/minúsculas transformando tudo em minúsculas:
const capsIgnoredWord = receivedWord.toLowerCase();
//cria constante para trabalhar com a string já sem caps:
const wordInverter = capsIgnoredWord;
//transformar string em array:
let stringToArray = wordInverter.split("");
//inverter o array:
let arrayInverter = stringToArray.reverse();
//transformar array, agora invertida, em string:
const arrayToString = arrayInverter.join("");
//verificando se é verdadeiro ou falso:
let condition;
arrayToString === capsIgnoredWord ?  condition = true : condition = false;
return condition
};

console.log(palindromeTester(`Arara`))

//outra maneira de resolver é unindo:
function palindromeTester02 (receivedWord02) {
    let inverter02 = receivedWord02.toLowerCase().split("").reverse().join("")
    if (inverter02 = receivedWord02) {
        return true
    }
    else {
        return false
    };

};
console.log(palindromeTester02(`Arara`))


// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

function whereIsHigher (trybeArrayOfNumbers) {
    // let orderedArray = trybeArrayOfNumbers.sort(function (a,b) {return a-b})
    // for (let key in trybeArrayOfNumbers) {
    //     if (key === orderedArray.length-1)
    // }
};


//Se o exercício pedisse O MAIOR NÚMERO, e não qual seu maior índice original...
function whoIsHigher (arrayOfNumbers) {
// usando .sort(FUNÇÃO), onde função é function (a,b) {return a-b}, pois sendo a menor que b, o resultado é negativo - e assim o elemento é posicionado à esquerda:
let organizedArray = arrayOfNumbers.sort(function (a,b) {
    return a-b});
console.log(organizedArray);
//o menor número será o último - ou seja, índex = comprimento da array - 1:
return organizedArray[organizedArray.length-1];
;}
console.log(whoIsHigher([2, 3, 6, 7, 10, 1]))

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

function whoIsLower (arrayOfNumbers) {
//usando .sort():
let organizedArray = arrayOfNumbers.sort();
//o menor número será o primeiro - logo, índex 0:
return organizedArray[0];
}
console.log(whoIsLower([2, 4, 6, 7, 10, 0, -3]))

