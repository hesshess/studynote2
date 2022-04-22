import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import Home from './Home';

import DepartmentPath from './pages/DepartmentPath';
import Error404 from './pages/Error404';

const App = () => {
  return (
    <div>
      <h1>02-simple-spa</h1>
      <hr />

      <nav>
        {/*PATH 파라미터를 포함하는 링크 구성 */}
        <Link to="/weather/mon">월</Link>&nbsp;|&nbsp;
        <Link to="/weather/tue">화</Link>&nbsp;|&nbsp;
        <Link to="/weather/wed">수</Link>&nbsp;|&nbsp;
        <Link to="/weather/thu">목</Link>&nbsp;|&nbsp;
        <Link to="/weather/fri">금</Link>&nbsp;|&nbsp;
        <Link to="/weather/sat">토</Link>&nbsp;|&nbsp;
        <Link to="/weather/sun">일</Link>
      </nav>

      <Routes>
        {/*---첫페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야한다--- */}
        {/*---첫페이지로 사용되는 컴포넌트는 path에 '/'를 권장--- */}
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/weather/:day" element={<DepartmentPath />} />
        {/*PATH 속성 없이 route 지정 -> 지정되지 않은 모든 요청에 반응. 단 Routes블록의 맨 마지막에 배치해야함 */}
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
