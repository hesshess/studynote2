import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import data from './GradeData';
import GradeTable from './components/GradeTable';
import Meta from './components/Meta';
const App = () => {
  return (
    <div>
      <Meta title="React 연습문제" />
      <h1>성적표</h1>
      <nav>
        <Link to="/grade_table/1">1학년</Link>&nbsp;|&nbsp;
        <Link to="/grade_table/2">2학년</Link>&nbsp;|&nbsp;
        <Link to="/grade_table/3">3학년</Link>&nbsp;|&nbsp;
        <Link to="/grade_table/4">4학년</Link>
      </nav>
      <hr />
      <Routes>
        <Route
          path="/grade_table/1"
          element={<GradeTable item={data['1학년']} title={'1학년'} />}
        ></Route>
        <Route
          path="/grade_table/2"
          element={<GradeTable item={data['2학년']} title="2학년" />}
        ></Route>
        <Route
          path="/grade_table/3"
          element={<GradeTable item={data['3학년']} title="3학년" />}
        ></Route>
        <Route
          path="/grade_table/4"
          element={<GradeTable item={data['4학년']} title="4학년" />}
        ></Route>
      </Routes>
    </div>
  );
};
export default App;
