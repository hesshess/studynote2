import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuLink from './MenuLink';

import PrintStars from './PrintStars';

function App() {
  return (
    <>
      <h1>hook 연습문제</h1>
      <nav>
        <MenuLink to="/printstars">Print Stars</MenuLink>
      </nav>
      <hr />
      <Routes>
        <Route path="/printstars" element={<PrintStars />} />
      </Routes>
    </>
  );
}
export default App;
