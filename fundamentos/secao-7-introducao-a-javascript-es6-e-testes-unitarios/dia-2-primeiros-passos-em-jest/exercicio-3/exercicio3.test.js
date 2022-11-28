// const { describe } = require('yargs');
const { encode, decode } = require('./exercicio3');

describe ('Realiza o bloco de testes proposto para o exercício 3', () => {
    it ('Testa se encode e decode são funções', () =>
    { expect (typeof encode && typeof decode).toBe('function');
    });
    it ('Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5 através da função encode.', () =>
    { expect (encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    });
    it ('Testa se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u através da função decode', () => {
        expect (decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    });
    it ('Testa se a string inserida tem o mesmo número de caracteres da string retornada', () => {
        expect (encode('aeioua').length && decode('123456').length).toBe(6);
    });
});