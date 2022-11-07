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
        <li>
          <Link to="/useMemo">useMemo</Link>
        </li>
        <li>
          <Link to="/useRef">useRef</Link>
        </li>
        <li>
          <Link to="/useContext">useContext</Link>
        </li>
        <li>
          <Link to="/useReduce">useReduce</Link>
        </li>
        <li>
          <Link to="/useContextReduce">useContextReduce</Link>
        </li>
      </ul>
    </header>
  );
}
