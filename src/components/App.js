import React, { Component } from 'react';
import SelectMove from './SelectMove';
import StartGame from './StartGame';
// import PanelLeft from './PanelLeft';
// import PanelRight from './PanelRight';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1 className='title-game'>Papier, kamień, nożyczki</h1>
        <SelectMove />
        <StartGame />
        {/* <PanelLeft /> */}
        {/* <PanelRight /> */}
      </div>
    );
  }
}

export default App;
