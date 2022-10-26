    // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    // const pessoa = {
    //     nome: 'Henri',
    //     idade: 20
    //   }
    //   pessoa = {
    //     nome: 'Luna',
    //     idade: 19
    //   } // Altere essa estrutura para corrigir o erro.
    //   console.log('Nome:', pessoa.nome);
    //   console.log('Idade:', pessoa.idade);

// EXERCÍCIO 2 - TRANSFORMAR EM ARROW FUNCTIONS
// function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

  const numeroAleatorio = () => Math.random();
  console.log (numeroAleatorio());