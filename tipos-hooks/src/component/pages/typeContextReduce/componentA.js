import React from 'react';

const { useContext } = require('react');
const { Context } = require('./appContext');

export const ComponentA = () => {
  const context = useContext(Context);

  return (
    <>
      <p>ComponentA: {context.state.title}</p>
      <button onClick={() => context.dispatch({ type: 'CHANGE_TITLE' })}>
        Clicque
      </button>
    </>
  );
};
