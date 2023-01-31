import React, {Component} from  'react';
import './App.css';

function consoleText1 () {
  return console.log(`Clicou no botão 1! :D`)
};
function consoleText2 () {
  return console.log(`Clicou no botão 2! :D`)
};
function consoleText3 () {
  return console.log(`Clicou no botão 3! :D`)
}


class App extends Component {
  render () {
  return (<div>
    <button onClick={consoleText1}>Imprime Texto 1 no Console</button>
    <button onClick={consoleText2}>Imprime Texto 2 no Console</button>
    <button onClick={consoleText3}>Imprime Texto 3 no Console</button>
        </div>
  );
  };
}

export default App;
