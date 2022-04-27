import React from 'react';
import GradeData from './GradeData';
import GradeItem from './components/GradeItem';
const App = () => {
  return (
    <div>
      <nav>
        <a href="/grade_table/1">1학년</a>&nbsp;|&nbsp;
        <a href="/grade_table/2">2학년</a>&nbsp;|&nbsp;
        <a href="/grade_table/3">3학년</a>&nbsp;|&nbsp;
        <a href="/grade_table/4">4학년</a>
      </nav>
    </div>
  );
};
export default App;
