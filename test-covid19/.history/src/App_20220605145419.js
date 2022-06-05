import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Top19 from './components/Top19';

import Covid19 from './pages/Covid19';

const sendToApp = (x, y) => {
  console.log(x, y);
};

const App = memo(() => {
  return (
    <div>
      <Top19 sendToApp={sendToApp} />
      <Routes>
        <Route path="/:field" element={<Covid19 />} />
      </Routes>
    </div>
  );
});

export default App;
