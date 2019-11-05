import React from 'react';
import Game from './component/game/game'
import './App.css';

class App extends React.Component {

  

  render(){
  return (
    <div className="App">
       <Game />
       {/* <button onClick={this.simpleAction}>Test redux action</button> */}
    </div>
  );
}
}



export default App;
