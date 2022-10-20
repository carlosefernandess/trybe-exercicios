// Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const valueOne = 51;
const valueAnother = 61;
const valueAnotherOne = 74;

if (valueOne > valueAnother && valueOne > valueAnotherOne) {
    console.log(valueOne)
    }
    else if (valueAnother > valueOne && valueAnother > valueAnotherOne) {
        console.log(valueAnother)
    }
    else if (valueAnotherOne > valueAnother && valueAnotherOne > valueOne) {
        console.log(valueAnotherOne)    
    }
    else {
    console.log("Os números são iguais!")
    };