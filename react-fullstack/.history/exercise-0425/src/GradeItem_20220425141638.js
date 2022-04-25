import React from 'react';
import PropTypes from 'prop-types';
import data from './GradeData';

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
    </table>
  );
};

export default GradeItem;
