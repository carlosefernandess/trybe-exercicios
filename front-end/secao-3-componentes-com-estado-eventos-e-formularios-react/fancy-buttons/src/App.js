import React, {Component} from  'react';
import './App.css';






class App extends Component {
  constructor () {
    super ()
    this.consoleText1 = this.consoleText1.bind(this);
    this.consoleText2 = this.consoleText2.bind(this);
    this.consoleText3 = this.consoleText3.bind(this);
  }

  consoleText1() {
  console.log('Clicou no botão 1! :D')
  };

  consoleText2 () {
  console.log(`Clicou no botão 2! :D`)
  };

  consoleText3 () {
  console.log(`Clicou no botão 3! :D`)
  };

  render () {
  return (
    <div>
      <button onClick={this.consoleText1}>Imprime Texto 1 no Console</button>
      <button onClick={this.consoleText2}>Imprime Texto 2 no Console</button>
      <button onClick={this.consoleText3}>Imprime Texto 3 no Console</button>
    </div>
  );
  };
}

export default App;
