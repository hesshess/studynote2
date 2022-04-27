import React from 'react';
import Meta from './Meta';

const GradeTable = ({ arr, title }) => {
  return (
    <div>
      <Meta title={`${title}:::React연습문제`} />
      <table border={1}>
        <thead>
          <tr>
            <th>이름</th>
            <th>성별</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
            <th>과학</th>
            <th>총점</th>
            <th>평균</th>
          </tr>
        </thead>
        <tbody>
          <tr item={}></tr>
        </tbody>
      </table>
    </div>
  );
};

export default GradeTable;
