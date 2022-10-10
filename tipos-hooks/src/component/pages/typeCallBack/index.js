import React, { useCallback, useMemo, useState } from 'react';

export function TypeCallback() {
  const [contador, setContador] = React.useState(0);

  const callbackAtualizado = React.useCallback(() => {
    console.log('callbackAtualizado:', contador);
  }, [contador]);

  const callbackNaoAtualizado = React.useCallback(() => {
    console.log('callbackNaoAtualizado:', contador);
  }, []);

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={callbackAtualizado}>callbackAtualizado</button>
      <button onClick={callbackNaoAtualizado}>callbackNaoAtualizado</button>
    </div>
  );
}
