function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  
module.exports = myRemove;

//A função faz o push no newArr de todos os elementos dados como parâmetro(arr) da função myRemove, DESDE QUE seja diferente do elemento dado como parâmetro (item); ou seja - uma cópia do array passado sem o item.