const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// REQUISITOS:
// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const expectedResult = 'Stephen King';
const authorBornIn1947 = () => books.find((element) => element.author.birthYear === 1947).author.name;
console.log(authorBornIn1947());

//Retorne o nome do livro com menor número de caracteres (menor nome).
// const expectedResult2 = 'Duna';
const smallerName = () => {
  let nameBook;
  const titlesArray = [];
  books.forEach((el) => titlesArray.push(el.name));
  nameBook = (titlesArray.sort((x, y) => (x.length-y.length)))[0]
  return nameBook;
}
console.log(smallerName());

//Encontre o primeiro livro cujo nome possua 26 caracteres.
// const expectedResult3 = {
//     author: {
//       birthYear: 1948,
//       name: 'George R. R. Martin',
//     },
//     genre: 'Fantasia',
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     releaseYear: 1991,
//   };
  
  const getNamedBook = () => {
    const titlesArray2 = [];
    books.forEach((el) => titlesArray2.push(el));
    namedBook26Char = titlesArray2.find((el) => el.name.length === 26);
    return namedBook26Char;
  }
console.log(getNamedBook());