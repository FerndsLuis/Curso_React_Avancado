// @ts-nocheck
import { Header } from 'component/Header';
import React, { useReducer } from 'react';

const globalState = {
  title: 'O título',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      console.log('muda c/ payload: ', action.payload);
      return { ...state, title: 'Título Mudou' };
    case 'inverte':
      console.log('inverte');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    default:
      return { ...reducer };
  }
};

export function TypeReduce() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title } = state;

  return (
    <div>
      <Header />

      <div>
        <h1>UseReduce</h1>
        <p>
          Título: {title} | Contador: {counter}
        </p>
        <hr />
        <button
          onClick={() =>
            dispatch({
              type: 'muda',
              payload: new Date().toLocaleDateString('pt-BR'),
            })
          }
        >
          mudar título
        </button>
        <button onClick={() => dispatch({ type: 'inverte' })}>
          inverter título
        </button>
      </div>
    </div>
  );
}
