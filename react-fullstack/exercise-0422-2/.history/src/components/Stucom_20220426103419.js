import React from 'react';

const Stucom = ({ item }) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.grade}</td>
      <td>{item.idnum.substring(0, 6)}-*******</td>
      <td>{new Date(item.birthdate).toLocaleDateString()}</td>
      <td>{item.tel}</td>
      <td>{item.height}</td>
      <td>{item.weight}</td>
      <td>{item.deptno}</td>
      <td>{item.profno}</td>
    </tr>
  );
};

export default Stucom;
