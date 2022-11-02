// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let player = {
nome : 'Marta',
lastName :'Silva',
age : 34,
medals : { 
    golden: 2, 
    silver: 3
}
};
// MEDALS É UM OBJETO DENTRO DE UM OBJETO
console.log(player['medals']['silver']);
console.log(player.age);
console.log(player.lastName);
console.table(player);