// 1) EXEMPLO:
let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  const infoDoBanco = 'banco';
  console.log(conta['banco']);
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta.banco.nome); // TrybeBank
  console.log(conta[infoDoBanco]['nome'])
  //*****infoDoBanco não recebe string quando citado por ser uma variável que guarda o valor 'banco', entre aspas, portanto uma STRING. SEMPRE será STRING entre [] quando se tratar de OBJETO.******
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000
  
  console.log(conta.banco.cod); // 012
  console.log(conta[infoDoBanco]['cod'])
  console.log(conta['banco']['id']); // 4
  console.log(conta[infoDoBanco]['id'])

//   É POSSÍVEL IR PELO Nº DO ÍNDEX? Não! Só para acessar o Objeto quando contido em um ARRAY! Ver exemplo 3 mais abaixo.

// 2)OUTRO EXEMPLO:
let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//   3) OBJETO DENTRO DE UM ARRAY:

let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(primeiroMorador['andar']); // 10

//   Construindo o segundo morador:
console.log(moradores[1]) //Retorna o objeto de índex 1 na array chamada moradores;
console.log(moradores[1]['nome']); //Retorna a chave *nome* do objeto de índex 1 da array chamada moradores;
console.log(moradores[1].nome); //Exatamente a mesma coisa, mas usando a notação de ponto

  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey

  console.table(moradores)