import { Header } from 'component/Header';
import React from 'react';
import { ComponentA } from './componentA';
import { ComponentB } from './componentB';

import { AuthProvider } from './context/auth';

import './style.css';

export function TypeContext() {
  //const { numero,setNumero } = useContext(GlobalContext);

  return (
    <div>
      <Header />

      <div>
        <h1>UseContext</h1>

        <AuthProvider>
          <ComponentA />
          <ComponentB />
        </AuthProvider>
      </div>
    </div>
  );
}
