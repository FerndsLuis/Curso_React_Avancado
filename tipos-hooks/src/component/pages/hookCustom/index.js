import { Header } from 'component/Header';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

export function HookCustom() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(1000);

  useMyHook(() => {
    setCounter((c) => c + 1);
  }, delay);
  return (
    <div>
      <Header />

      <div>
        <p>My Hook</p>
        <hr />
        <p>contador: {counter} </p>
        <p>delay: {delay} </p>
        <button
          onClick={() => {
            setDelay((d) => d + incrementor);
          }}
        >
          +{incrementor}
        </button>
        <button
          onClick={() => {
            setDelay((d) => d - incrementor);
          }}
        >
          -{incrementor}
        </button>
        <br />
        <input
          type="number"
          value={incrementor}
          onChange={(e) => {
            setIncrementor(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
}
