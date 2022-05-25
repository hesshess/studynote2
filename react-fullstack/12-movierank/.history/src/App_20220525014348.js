import React from 'react';
import { Router } from 'react-router-dom';

import MovieRank from './pages/MovieRank';

function App() {
  return (
    <div>
      <Router path="/" element={<MovieRank />} />
    </div>
  );
}

export default React.memo(App);
