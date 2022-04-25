import React from 'react';
import GradeData from './GradeData';

const App = () => {
  return (
    <div>
      {/**Route 처리를 수행하는 페이지에서 이 컴포넌트 사용시, 이 내용이 모든 페이지에 공통 적용된다. */}

      <h1>성적표</h1>

      <hr />

      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>학년</th>
            <th>성별</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
            <th>과학</th>
            <th>총점</th>
            <th>평균</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default App;
