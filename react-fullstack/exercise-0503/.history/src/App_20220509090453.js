import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuLink from './MenuLink';

import PrintStars from './PrintStars';
import ArithmeticOp from './ArithmeticOp';
import Calculator from './Calculator';

function App() {
  return (
    <>
      <h1>hook 연습문제</h1>
      <nav>
        <MenuLink to="/printstars">별찍기</MenuLink>
        <MenuLink to="/arithmetics">사칙연산</MenuLink>
        <MenuLink to="/cal">나의 계산기</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/printstars" element={<PrintStars />} />
        <Route path="/arithmetics" element={<ArithmeticOp />} />
        <Route path="/cal" element={<Calculator />} />
      </Routes>
    </>
  );
}
export default App;
