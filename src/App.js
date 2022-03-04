import logo from './logo.png';
import './App.css';
import React from 'react';
import Switch from '@mui/material/Switch';
import { useSwitch } from '@mui/base/SwitchUnstyled';
 
const primary = ["#181A18", "#F5F5F5"];
const secondary = ["#F5F5F5", "#181A18"];
//const background = ["black" , "white"];
let page = "home";
let root = document.querySelector(":root");

function App() {
  return (
    <div className="App">
      <div className="App-Header">
        <div className='App-Header-Page'>
        <h1>{ page }</h1>
        </div>
        <div className="Head-Switch">
          <h3>Light</h3>
          <Switch onClick={() => changeTheme()} />
          <h3>Dark</h3>
        </div>
      </div>
    </div>
  );
}

function changeTheme() {
  let theme = -1;

  if (root.style.getPropertyValue("--primary") === "#F5F5F5") {
    theme = 0;
    console.log("light");
    root.style.setProperty('--primary', primary[theme]);
    root.style.setProperty('--secondary', secondary[theme]);
  } else {
    theme = 1;
    console.log("dark");
    root.style.setProperty('--primary', primary[theme]);
    root.style.setProperty('--secondary', secondary[theme]);
  }
}
/*class Option extends React.Component {
  }
}*/

export default App;
