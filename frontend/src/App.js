import React from 'react';
import logo from './logo.svg';
import './App.css';
import View from './components/Users'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <View />
        </p>
      </header>
    </div>
  );
}

export default App;
