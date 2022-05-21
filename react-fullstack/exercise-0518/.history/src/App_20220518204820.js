import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GradeList from './pages/GradeList';
import GradeAdd from './pages/GradeAdd';
import GradeEdit from './pages/GradeEdit';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GradeList />} />
        <Route path="/add" exapt={true} element={<GradeAdd />} />
        <Route path="/edit/:id" element={<GradeEdit />} />
      </Routes>
    </>
  );
}

export default App;
