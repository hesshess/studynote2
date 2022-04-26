import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

/**각예제별 컴포넌트 import */
import Department from './Department';
import Professor from './Professor';
import Student from './Student';

const App = () => {
  return (
    <div>
      <h1>EXAM03</h1>
      {/**Link 구성 */}
      <nav>
        <Link to="/department">학과목록</Link>&nbsp;|&nbsp;
        <Link to="/professor">교수목록</Link>&nbsp;|&nbsp;
        <Link to="/student">학생목록</Link>
      </nav>
      <hr />

      {/**각예제 페이지 Route 적용 */}
      <Routes>
        <Route path="/department" element={<Department />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </div>
  );
};

export default App;
