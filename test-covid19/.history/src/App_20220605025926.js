import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Covid19 from './pages/Covid19';

const App = memo(() => {
  return (
    <div>
      <Routes>
        <Route path="/:field" element={<Covid19 />} />
      </Routes>
    </div>
  );
});

export default App;
