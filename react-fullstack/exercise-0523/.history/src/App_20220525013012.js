import React, { memo } from 'react';
import News from './pages/News';
const App = memo(() => {
  return (
    <div>
      <h1>Redux News Viewer</h1>
      <hr />
      <News />
    </div>
  );
});
export default App;
