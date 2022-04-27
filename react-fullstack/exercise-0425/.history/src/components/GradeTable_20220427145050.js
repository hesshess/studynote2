import React from 'react';
import Meta from './Meta';

const GradeTable = ({ item, title }) => {
  return (
    <div>
      <Meta title={`${title}:::React연습문제`} />
      <table border={1}>
        <thead>
          <tr>
            {Object.keys(item[0]).map((keyName, index) => {
              return <th key={index}>{keyName}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default GradeTable;
