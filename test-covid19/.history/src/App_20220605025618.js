import React, { memo } from 'react';
import { Router } from 'react-router-dom';

import Top19 from './components/Top19';

//import Covid19 from './pages/Covid19';

const App = memo(() => {
  return (
    <div>
      <Top19 />
      //
      <Router path="/:field" element={<Covid19 />} />
    </div>
  );
});

export default App;
