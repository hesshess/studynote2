import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Top from './components/Top';

import CovidSearch from './pages/CovidSearch';

const App = memo(() => {
  return (
    <div>
      <Top />
      <Routes>
        <Route path="/:api" element={<CovidSearch />} />
      </Routes>
    </div>
  );
});

export default App;
