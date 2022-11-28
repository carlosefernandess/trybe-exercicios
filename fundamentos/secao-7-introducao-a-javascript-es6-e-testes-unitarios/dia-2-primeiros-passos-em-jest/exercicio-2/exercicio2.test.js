// const { it } = require("jest-circus");
// const { default: expect } = require("expect");
const fizzBuzz = require("./exercicio2");

describe ('Sequencia de testes propostos para o exercício 2', () => {
    test ('Testa se um numeral *positivo divisível por 3 e 5* retorna a mensagem fizzbuz.', () => 
    { expect (fizzBuzz(15)).toBe('fizzbuzz');
    });
    it ('Testa se um numeral *positivo divisível por 3 e não-divisível por 5* retorna a mensagem fizz.', () => 
    { expect (fizzBuzz(6)).toBe('fizz');
    });
    it ('Testa se um numeral *positivo divisível por 5 e não-divisível por 3* retorna a mensagem buzz.', () => 
    { expect (fizzBuzz(10)).toBe('buzz');
    });
    it ('Testa se um numeral *positivo não-divisível por 3 e não-divisível por 5* retorna o próprio número inserido.', () => 
    { expect (fizzBuzz(7)).toBe(7);
    });
    it ('Testa se a entrada de tipo não-numérico retorna false.', () =>
    { expect(fizzBuzz('Z')).toBe(false);
    });
});