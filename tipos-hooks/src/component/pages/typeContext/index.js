import { Header } from 'component/Header';
import React, { useContext, useState } from 'react';

const GlobalContext = React.createContext(null);

const ComponentA = () => {
  const { count, setCount } = useContext(GlobalContext);
  return (
    <p>
      Componente A: {count} -{' '}
      <button onClick={() => setCount((preventCount) => preventCount + 1)}>Adicionar número</button>
    </p>
  );
};

const ComponentB = () => {
  const { count, setCount } = useContext(GlobalContext);
  return (
    <p>
      Componente B: {count} -{' '}
      <button onClick={() => setCount((preventCount) => preventCount + 1)}>Adicionar número</button>
    </p>
  );
};

export function TypeContext() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />

      <div>
        <h1>UseContext</h1>
        Componente Principal: {count} -{' '}
        <button onClick={() => setCount((preventCount) => preventCount + 1)}>Adicionar número</button>
        <GlobalContext.Provider value={{ count, setCount }}>
          <ComponentA />
          <ComponentB />
        </GlobalContext.Provider>
      </div>
    </div>
  );
}
