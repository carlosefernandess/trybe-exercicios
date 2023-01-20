// import fetch from 'node-fetch';
// global.fetch = fetch;

const cep = '30130-010'; 
fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.json())
  .then(data => console.log(data));