import React from 'react';
import Meta from './Meta';

const GradeTable = ({ props }) => {
  return (
    <div>
      <Meta title={props.title} />
      <table border={1}>
        <thead>
          <tr>
            {Object.keys(props.item[0]).map((keyName, index) => {
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
