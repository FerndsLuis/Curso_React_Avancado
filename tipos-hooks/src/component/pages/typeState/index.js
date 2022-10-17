import { useState } from 'react';
import React from 'react';
import './style.css';
import logo from './logo.svg';
import { Header } from 'component/Header';

export function TypeState() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);

  const reverseClass = reverse ? 'Reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <Header />
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
          <h1>Contador: {counter}</h1>
          <p>
            <button onClick={handleClick} type="button">
              Reverse {reverseClass}
            </button>
          </p>
          <p>
            <button onClick={handleIncrement} type="button">
              Increment {counter}
            </button>
          </p>
        </header>
      </div>
    </div>
  );
}
