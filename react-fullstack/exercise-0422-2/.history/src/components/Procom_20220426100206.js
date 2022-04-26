import React from 'react';

const Procom = ({ item }) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.dname}</td>
      <td>{item.loc}</td>
    </tr>
  );
};

export default Procom;
