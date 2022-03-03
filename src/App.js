import logo from './logo.png';
import './App.css';
import React from 'react';
import Switch from '@mui/material/Switch';

let page = "home";
let root = document.querySelector(":root");

function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <h1>{ page }</h1>
        <button onClick={() => changeTheme()}>Click Me!</button>
        <div className="switch">
          <span>Light-Mode</span><Switch /><span>Dark</span>
        </div>
      </div>
    </div>
  );
}

function changeTheme() {
  if (root.style.getPropertyValue("--text") === "black") {
    root.style.setProperty('--text', 'white');
    root.style.setProperty('--background', 'black');
  } else {
    root.style.setProperty('--text', 'black');
    root.style.setProperty('--background', 'white');
  }
}
/*class Option extends React.Component {
  }
}*/

export default App;
