import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MemList from './pages/MemList';
import MemAdd from './pages/MemAdd';
import MemEdit from './pages/MemEdit';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exapt={true} element={<MemList />} />
        <Route path="/add" element={<MemAdd />} />
        <Route path="/edit/:id" element={<MemEdit />} />
      </Routes>
    </>
  );
}

export default App;
