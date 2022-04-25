import React from 'react';
import data from './GradeData';
import MyDataSub from './components/MyDataSub';

const GradeItem = ({ name, grade, gender, kor, eng, mth, sci }) => {
  return (
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
      <tbody>
        {data.map((item) => {
          return <MyDataSub item={item} />;
        })}
      </tbody>
    </table>
  );
};

export default GradeItem;
