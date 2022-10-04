import P from 'prop-types';
import { Header } from 'component/Header';
import React, { useState } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

export function TypeCallback() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (num) => {
    setCounter((preventNumber) => preventNumber + num);
  };

  return (
    <div>
      <Header />

      <div>
        <h1>UseCallback</h1>
        <p>Contador1: {counter}</p>
        <Button incrementButton={incrementCounter} />
      </div>
    </div>
  );
}
