import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from 'component/pages/Home';
import TypeState from 'component/pages/typeState/index.';
import { TypeEffect } from 'component/pages/typeEffect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useState" element={<TypeState />} />
        <Route path="/useEffect" element={<TypeEffect />} />
      </Routes>
    </Router>
  );
}

export default App;
