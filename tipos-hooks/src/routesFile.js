import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'component/pages/Home';
import { TypeEffect } from 'component/pages/typeEffect';
import { TypeCallback } from 'component/pages/typeCallBack';
import { TypeMemo } from 'component/pages/typeMemo';
import { TypeState } from 'component/pages/typeState';
import React from 'react';
import { TypeRef } from 'component/pages/typeRef';
import { TypeContext } from 'component/pages/typeContext';
import { TypeReduce } from 'component/pages/typeReduce';
import { TypeContextReduce } from 'component/pages/typeContextReduce';
import { HookCustom } from 'component/pages/hookCustom';

const RoutesFile = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useState" element={<TypeState />} />
        <Route path="/useEffect" element={<TypeEffect />} />
        <Route path="/useCallback" element={<TypeCallback />} />
        <Route path="/useMemo" element={<TypeMemo />} />
        <Route path="/useRef" element={<TypeRef />} />
        <Route path="/useContext" element={<TypeContext />} />
        <Route path="/useReduce" element={<TypeReduce />} />
        <Route path="/useContextReduce" element={<TypeContextReduce />} />
        <Route path="/useCostum" element={<HookCustom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesFile;
