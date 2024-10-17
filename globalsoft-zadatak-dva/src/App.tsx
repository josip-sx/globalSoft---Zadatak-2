import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CheckBox } from './components/CheckBoxComponent';
import { CounterApp } from './components/Counter';

function App() {
  return (
    <div className="container">
        <CheckBox></CheckBox>
        <CounterApp></CounterApp>
    </div>
  );
}

export default App;
