const sum = require ("./script");

test ("Testa a soma de entre dois positivos", () => {
    expect(sum(1, 2)).toBe(3);
});

it ("Teste a soma com Negativo e Positivo", () => {
    expect (sum(-4,6)).toBe(2);
});

it ("Testa a soma entre dois negativos", () => {
    expect (sum(-2,-9)).toBe(-11);
});

it ("Testa a soma com um elemento typeof != number", () => {
    expect(sum(1,a)).toBe("1a");
})