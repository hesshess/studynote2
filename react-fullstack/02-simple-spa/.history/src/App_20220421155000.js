import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <h1>02-simple-spa</h1>
      <hr />

      <nav>
        <Link to="/">[Home]</Link>
        <Link to="/about">[About]</Link>
      </nav>

      <a href="/about">일반링크</a>

      {/*---페이지 역할을 할 컴포넌트를 명시하기--- */}
      <Routes>
        {/*---첫페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야한다--- */}
        {/*---첫페이지로 사용되는 컴포넌트는 path에 '/'를 권장--- */}
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
