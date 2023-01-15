// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'kiwi', 'framboesa'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite em pó', 'granola', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
    const newArray = [...fruit,...additional]
    return newArray;
};

console.log(fruitSalad(specialFruit, additionalItens));
