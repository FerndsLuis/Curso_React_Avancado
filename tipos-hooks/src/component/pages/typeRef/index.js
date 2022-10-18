import { Header } from 'component/Header';
import React, { useEffect, useRef, useState } from 'react';

export function TypeRef() {
  const countRef = useRef(null);
  const elementtRef = useRef(null);

  const [counter, setCounter] = useState(0);

  //Não temos loop infinito com useRef
  useEffect(() => {
    countRef.current = countRef.current + 1;

    console.log(countRef.current);
    console.log(elementtRef.current);
  });

  return (
    <div>
      <Header />

      <div>
        <h1>UseRef</h1>
        <p ref={elementtRef}>Referência</p>
        <p>contador: {counter}</p>

        <button
          onClick={() => {
            setCounter((preventCounter) => preventCounter + 1);
          }}
        >
          Teste
        </button>
      </div>
    </div>
  );
}
