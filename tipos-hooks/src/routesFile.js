import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'component/pages/Home';
import { TypeEffect } from 'component/pages/typeEffect';
import { TypeCallback } from 'component/pages/typeCallBack';
import { TypeMemo } from 'component/pages/typeMemo';
import { TypeState } from 'component/pages/typeState';
import React from 'react';

const RoutesFile = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useState" element={<TypeState />} />
        <Route path="/useEffect" element={<TypeEffect />} />
        <Route path="/useCallback" element={<TypeCallback />} />
        <Route path="/useMemo" element={<TypeMemo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesFile;
