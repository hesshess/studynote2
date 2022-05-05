import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuLink from './MenuLink';

import PrintStars from './PrintStars';


function App(){
  return(
    <>
    <MenuLink to="/printstars">Print Stars</MenuLink>
    </nav>
    <hr />
    <Routes>
      <Route path="/printstars" element={<PrintStar />} />
  </>)
};
export default App;
