import React from 'react';

const GradeTable = ({ item }) => {
  return (
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
  );
};

export default GradeTable;
