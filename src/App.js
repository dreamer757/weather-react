import logo from './logo.svg';
import './App.css';
import React from "react";
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from React</h1>
          
          <Weather city="Tokyo"/>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React now!
        </a>
      </header>
    </div>
  );
}

export default App;
