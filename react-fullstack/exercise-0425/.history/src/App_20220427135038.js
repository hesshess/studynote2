import React from 'react';

import Meta from './components/Meta;';
const App = () => {
  return (
    <div>
      <Meta title="React 연습문제" />
      <nav>
        <Link href="/grade_table/1">1학년</Link>&nbsp;|&nbsp;
        <Link href="/grade_table/2">2학년</Link>&nbsp;|&nbsp;
        <Link href="/grade_table/3">3학년</Link>&nbsp;|&nbsp;
        <Link href="/grade_table/4">4학년</Link>
      </nav>
    </div>
  );
};
export default App;
