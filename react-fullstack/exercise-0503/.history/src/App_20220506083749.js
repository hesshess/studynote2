import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuLink from './MenuLink';

import PrintStars from './PrintStars';

function App() {
  return (
    <>
      <MenuLink to="/printstars">Print Stars</MenuLink>
      <hr />
      <Routes>
        <Route path="/printstars" element={<PrintStars />} />
      </Routes>
    </>
  );
}
export default App;
