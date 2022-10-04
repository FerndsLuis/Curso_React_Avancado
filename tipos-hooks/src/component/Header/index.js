import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/useState">UseState</Link>
        </li>
        <li>
          <Link to="/useEffect">UseEffect</Link>
        </li>
        <li>
          <Link to="/useCallback">useCallback</Link>
        </li>
      </ul>
    </header>
  );
}
