import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from 'component/pages/Home';
import TypeState from 'component/pages/typeState/index.';
import { TypeEffect } from 'component/pages/typeEffect';
import { TypeCallback } from 'component/pages/typeCallBack';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useState" element={<TypeState />} />
        <Route path="/useEffect" element={<TypeEffect />} />
        <Route path="/useCallback" element={<TypeCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
