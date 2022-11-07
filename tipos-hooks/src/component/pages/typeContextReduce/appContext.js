import React, { createContext } from 'react';

import P from 'prop-types';
import { useReducer } from 'react';
import { reducer } from './reducer';

// @ts-ignore
export const Context = createContext();

// data.js
export const globalState = {
  title: 'O título',
  counter: 0,
};

// AppContext
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};
