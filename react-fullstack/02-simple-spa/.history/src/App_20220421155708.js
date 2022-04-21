import React from 'react';
import { Link } from 'react-router-dom';
//
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
      //
    </div>
  );
};

export default App;
