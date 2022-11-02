//1) Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

//1.1 Adição (a + b)
//1.2 Subtração (a - b)
//1.3 Multiplicação (a * b)
//1.4 Divisão (a / b)
//1.5 Módulo (a % b)

const a = 10;
const b = 2;

function adicao () {
    return (a + b);
};
function substracao () {
    return (a - b);
};
function multiplicacao () {
    return (a * b);
};
function divisao () {
    return (a / b);
};
function modulo (){
    return (a % b);
};
// console.log(adicao());


// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
const x = 122;
const z = 123;
function numberCompare (){
    if (x>z) {
        return x;
    }
    else if (z>x) {
        return z;
    }
    else {
        return "Números iguais!";
    }
};
// console.log(numberCompare());

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
const num1 = 3;
const num2 = 3;
const num3 = 3;

function numberCompareThree () {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else if (num3 > num1 && num3 > num2){
        return num3;
    }
    else if (num1===num2 && num1===num3) {
        return "Todos os três números são iguais!";
    }
    else if (num1===num2 && num1!=num3) {
        return "Os números da primeira posição (" + num1 + ") e da segunda posição (" + num2 + ") são os mesmos!"
    }
    else if (num2===num3 && num2!=num1){
        return "Os números da segunda posição (" + num2 + ") e  da terceira posição (" + num3 + ") são os mesmos!"
    };
};
// console.log(numberCompareThree())

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function comparePlusOrMinus(number) {
    if (number > 0) {
        return ("positive");
    }
    else if (number < 0) {
        return ("negative");
    }
    else if (number = 0) {
        return ("zero")
    };
};
// console.log(comparePlusOrMinus (-2))


// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

function compareTriangleAngles(angle1, angle2, angle3) {
    let itsATriangle = 180;
    if (angle1+angle2+angle3 == itsATriangle) {
        return true;  
    }
    else if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
    return "Error! Invalid angle!";
    }
    else {
        return false;
    }
}
console.log(compareTriangleAngles(90, 1, 89))

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.