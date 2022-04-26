import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

/**각예제별 컴포넌트 import */
import Department from './Department';
import Professor from './Professor';
import Student from './Student';

import data from './myschool';

import myStyles from './assets/css/mystyle.module.css';

const App = () => {
  return (
    <div className={myStyles.center}>
      <h1 className={myStyles.title}>My School</h1>
      {/**Link 구성 */}
      <nav>
        <Link to="/department">학과목록</Link>&nbsp;|&nbsp;
        <Link to="/professor">교수목록</Link>&nbsp;|&nbsp;
        <Link to="/student">학생목록</Link>
      </nav>
      <hr />

      {/**각예제 페이지 Route 적용 */}
      <Routes>
        <Route
          path="/department"
          element={<Department departments={data.department} />}
        />
        <Route
          path="/professor"
          element={<Professor professors={data.professor} />}
        />
        <Route path="/student" element={<Student students={data.student} />} />
      </Routes>
    </div>
  );
};

export default App;
