import logo from './logo.png';
import './App.css';
import React from 'react';

let page = "home";
let root = document.querySelector(":root");

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>{ page }</h1>
        <button>Click Me!</button>
      </div>
    </div>
  );
}

/*class Option extends React.Component {
  }
}*/

export default App;
