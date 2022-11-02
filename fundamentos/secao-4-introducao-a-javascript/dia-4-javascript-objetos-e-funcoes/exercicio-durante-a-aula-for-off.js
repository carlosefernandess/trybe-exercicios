//No caso do For...In, o index/key, quando usado com uma Array, retorna O NÚMERO DO INDEX COMEÇANDO POR 0 (do mesmo modo que quaso usado com um Objeto retorna o nome da chave);

let food = ['hamburguer', 'bife', 'acarajé'];

for (let index in food) {
    console.log(index, food[index]); //retorna 0 hamburguer, 1 bife, 2 acarajé
};

//No caso do For...Of, o que será percorrido SERÁ OS VALORES, e não os indícesDoArray/nomesDasChaves

for (let value of food) {
    console.log(value); //retrona hamburguer, bife, acarajé (ou seja, somente os valores)
    // console.log(value, food[value]); // NÃO FUNCIONA, já que 'value' é o próprio valor do elemento do Array, e não seu índice como no for...of.
    console.log(food)
};

//O LAÇO FOR...OF NÃO FUNCIONA COM OBJETOS; SOMENTE COM ARRAYS!

// let foodObject = {
//     firstKey : 'Hamburguer',
//     secondKey: 'Bife',
//     thirdKey: 'Acarajé',
// }

// for (let valueOf of foodObject) {
//     console.log(valueOf);
// }