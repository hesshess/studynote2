import React from 'react';
import Meta from './Meta';
import GradeItem from './GradeItem';

const GradeTable = ({ arr, title }) => {
  return (
    <div>
      <Meta title={`${title}:::React연습문제`} />
      <h2>{title}</h2>
      <table border={1}>
        <thead>
          <tr>
            <strong>
              <th>이름</th>
              <th>성별</th>
              <th>국어</th>
              <th>영어</th>
              <th>수학</th>
              <th>과학</th>
              <th>총점</th>
              <th>평균</th>
            </strong>
          </tr>
        </thead>
        <tbody>
          {arr.map((v, i) => {
            return (
              <GradeItem
                name={v['이름']}
                sex={v['성별']}
                kor={v['국어']}
                eng={v['영어']}
                math={v['수학']}
                sinc={v['과학']}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GradeTable;
