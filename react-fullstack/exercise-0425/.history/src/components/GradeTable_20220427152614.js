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
            <th>
              <strong>이름</strong>
            </th>
            <th>
              <strong>성별</strong>
            </th>
            <th>
              <strong>국어</strong>
            </th>
            <th>
              <strong>영어</strong>
            </th>
            <th>
              <strong>수학</strong>
            </th>
            <th>
              <strong>과학</strong>
            </th>
            <th>
              <strong>총점</strong>
            </th>
            <th>
              <strong>평균</strong>
            </th>
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
