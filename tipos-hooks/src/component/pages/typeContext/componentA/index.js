import React from 'react';
import { useAuth } from '../context/auth';

export function ComponentA() {
  const { user, setUser } = useAuth();

  const handleName = (e) => {
    const name = e.target.value;
    setUser({ ...user, name });
    localStorage.setItem('user', JSON.stringify(name));
  };

  const handleTheme = (theme) => {
    setUser({ ...user, theme });
    localStorage.setItem('theme', JSON.stringify(theme));
  };

  return (
    <div className={user.theme}>
      Componente A: {user.name}
      <br />
      <input type="text" onChange={handleName}></input>
      <hr />
      Alterar thema:
      <select
        onChange={(e) => {
          handleTheme(e.target.value);
        }}
        value={user.theme}
      >
        <option value="">selecione</option>
        <option value="body-black">black</option>
        <option value="body-white">white</option>
      </select>
    </div>
  );
}
