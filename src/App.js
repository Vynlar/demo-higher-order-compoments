import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button text='Hello Ryan' />
      </div>
    );
  }
}

export default App;
