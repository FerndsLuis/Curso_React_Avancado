import { Header } from 'component/Header';
import React, { useEffect, useState } from 'react';

export function TypeEffect() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // useEffect(() => {
  //   console.log('componentDidUpdate - executa em toda atualização');
  // });

  // useEffect(() => {
  //   console.log('componentDidMount - executa 1 vez');
  // }, []);

  useEffect(() => {
    console.log('componentDidMount - executa toda vez que a dependêcnia mudar', counter);
  }, [counter]);

  return (
    <div>
      <Header />

      <div>
        <h1>UseEffect</h1>
        <p>
          Contador1: {counter} - Contador2: {counter2}
        </p>
        <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}> Contador 1 + </button>
        <br></br>
        <button onClick={() => setCounter2((prevCounter) => prevCounter + 1)}> Contador 2 + </button>
      </div>
    </div>
  );
}
