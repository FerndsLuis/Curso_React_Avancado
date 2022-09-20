import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from 'component/pages/Home';
import TypeState from 'component/pages/typeState/index.';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useState" element={<TypeState />} />
      </Routes>
    </Router>
  );
}

export default App;
