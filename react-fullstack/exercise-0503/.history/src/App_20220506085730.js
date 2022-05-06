import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuLink from './MenuLink';

import PrintStars from './PrintStars';
import ArithmeticOp from './ArithmeticOp';

function App() {
  return (
    <>
      <h1>hook 연습문제</h1>
      <nav>
        <MenuLink to="/printstars">별찍기</MenuLink>
        <MenuLink to="/arithmetics">사칙연산</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/printstars" element={<PrintStars />} />
        <Route path="/arithmetics" element={<ArithmeticOp />} />
      </Routes>
    </>
  );
}
export default App;
