import React from 'react';

const Procom = (item) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.userid}</td>
      <td>{item.position}</td>
      <td>{item.sal}</td>
      <td>{new Date(item.hiredate).toLocaleDateString()}</td>
      <td>{item.comm}</td>
      <td>{item.deptno}</td>
    </tr>
  );
};

export default Procom;
