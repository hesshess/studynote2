import React, { memo } from 'react';
import { Route } from 'react-router-dom';

import Top19 from './components/Top19';

import Covid19 from './pages/Covid19';

const App = memo(() => {
  return (
    <div>
      <Top19 />

      <Route path="/covid19" element={<Covid19 />} />
    </div>
  );
});

export default App;
