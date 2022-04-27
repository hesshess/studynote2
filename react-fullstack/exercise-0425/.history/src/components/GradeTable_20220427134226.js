import React from 'react';

const Grade1 = ({ arr1 }) => {
  return (
    <table border="1px">
      <thead>
        <tr>
          {arr1[0].map((keyName, index) => (
            <th key={index}>{keyName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  );
};

export default Grade1;
