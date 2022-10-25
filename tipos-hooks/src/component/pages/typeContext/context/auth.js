import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState({
    name: 'luis',
    theme: 'blue',
  });

  useEffect(() => {
    const userStorage = localStorage.getItem('user');
    const themeStorage = localStorage.getItem('theme');
    if (userStorage) {
      setUser({ name: JSON.parse(userStorage), theme: JSON.parse(themeStorage) });
    }
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>{props.children}</AuthContext.Provider>
    </>
  );
};

export const useAuth = () => React.useContext(AuthContext);
