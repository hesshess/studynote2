import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

/**각예제별 컴포넌트 import */
import DepartmentGet from './DepartmentGet';
import ProfessorPath from './ProfessorGet';
//import StudentPath from './StudentPath';

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
        <Route path="/professor" element={<ProfessorPath />} />
        {/*<Route path="/student" element={<StudentPath />} />*/}
      </Routes>
    </div>
  );
};

export default App;
