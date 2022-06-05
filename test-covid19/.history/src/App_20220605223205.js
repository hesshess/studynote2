import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Top19 from './components/Top19';

import Covid19 from './pages/Covid19';

const sendToApp = (date1, date2) => {
  let pdate1 = '';
  pdate1 = pdate1 + date1;
  let pdate2 = '';
  pdate2 = pdate2 + date2;
};

const App = memo(() => {
  return (
    <div>
      <Top19 sendToApp={sendToApp} />
      <Routes>
        <Route
          path="/:field"
          pdate1={pdate1}
          pdate2={pdate2}
          element={<Covid19 />}
        />
      </Routes>
    </div>
  );
});

export default App;
