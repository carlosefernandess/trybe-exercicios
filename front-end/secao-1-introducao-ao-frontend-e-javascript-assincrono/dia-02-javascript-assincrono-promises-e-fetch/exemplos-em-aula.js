// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });

  const randomPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = generateRandomNumber();
        // resolve(`O número gerado é ${randomNumber}`);
        reject(new Error('O erro foi capturado com catch!'));
    }, 2000);
  });
  



  //Chamando para testar....
  randomPromise()
    .then((param) => {
        console.log(param)
    }).catch((error) => {
    console.log(error.message)
    });

// resolvedPromise()
//   .then((response) => {
//     console.log(`resolvedPromise: o número gerado é ${response}.`);
//   })
//   .catch((error) => {
//     console.log(`Com a promise resolvida, não irá passar pelo catch`);
//   });

// rejectedPromise()
//   .then((response) => {
//     console.log(`Com a promise rejeitada, não irá passar pelo then`);
//   })
//   .catch((error) => {
//     console.log(`rejectedPromise: ${error.message}`);
//   });
  