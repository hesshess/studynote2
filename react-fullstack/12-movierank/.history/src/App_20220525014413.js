import React from 'react';
import { Route } from 'react-router-dom';

import MovieRank from './pages/MovieRank';

function App() {
  return (
    <div>
      <Route path="/" element={<MovieRank />} />
    </div>
  );
}

export default React.memo(App);
