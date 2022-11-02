let pizzas = {
    sabor: "Palmito",
    preco: 39.90,
    bordaCatupiry: true
};

for (let key in pizzas) {
    // console.log(key);
    // console.log(pizzas.preco);
    // console.log(pizzas['preco']);
    // console.log(pizzas[key]);
    console.log(key+`:`, pizzas[key]);
};

console.table(pizzas);

let pizzasDoces = ['chocolate', 'banana', 'morango'];

for (let index in pizzasDoces) {
    // console.log(index);
    // console.log(pizzasDoces);
    // console.log(pizzasDoces[index]);
    console.log(index, pizzasDoces[index]);
;}

console.table(pizzasDoces);