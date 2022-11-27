const myRemove = require ("./exercicio1");

describe ("Testes propostos pelo exercício1", () => { test ("Verifica se retorna o array esperado - sem o numeral 3", () =>
    { expect (myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    
    test ("Verifica se não retorna o array - com o numeral 3", () => 
    { expect (myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });

    test ("Verfica se retorna o array esperado - com o numeral 5 adicionado ao final", () =>
    { expect (myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
});
