// @ts-nocheck
import { Header } from 'component/Header';
import React, { useReducer } from 'react';
import { createContext } from 'react';
import { AppContext } from './appContext';
import { ComponentA } from './componentA';

export function TypeContextReduce() {
  return (
    <div>
      <Header />

      <div>
        <AppContext>
          <h1>UseContextReduce</h1>

          <ComponentA />
        </AppContext>
      </div>
    </div>
  );
}
