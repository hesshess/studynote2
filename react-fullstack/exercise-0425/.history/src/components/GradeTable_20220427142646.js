import React from 'react';

const GradeTable = ({ item }) => {
  return (
    <table border="1px">
      <thead>
        <tr>
          {item[0].map((keyName, index) => {
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
