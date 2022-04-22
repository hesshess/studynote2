import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

/**각예제별 컴포넌트 import */
import DepartmentGet from './DepartmentGet';
import ProfessorGet from './ProfessorGet';
import StudentGet from './StudentGet';

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
        <Route path="/department" element={<DepartmentGet />} />
        <Route path="/professor" element={<ProfessorGet />} />
        <Route path="/student" element={<StudentGet />} />
      </Routes>
    </div>
  );
};

export default App;
