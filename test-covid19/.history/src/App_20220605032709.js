import React, { memo } from 'react';
import { Routes, Route, Router } from 'react-router-dom';

import Top19 from './components/Top19';

import Covid19 from './pages/Covid19';

const App = memo(() => {
  return (
    <div>
      <Top19 />
      <Router>
        <Routes>
          <Route path="/:field" element={<Covid19 />} />
        </Routes>
      </Router>
    </div>
  );
});

export default App;
