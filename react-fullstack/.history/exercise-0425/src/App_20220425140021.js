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
            {Object.keys(GradeData[0]).forEach((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default App;
