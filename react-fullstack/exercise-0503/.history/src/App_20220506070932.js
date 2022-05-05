import React from 'react';
const App = () => {
  const [stars, setStars] = React.useState('');

  const printStar = (value) => {
    for (let i = 0; i < value; i++) {
      let str = '';
      for (let j = 0; j < i + 1; j++) {
        str += '*';
      }
      setStars(`<p>${str}</p>`);
    }
  };
  return (
    <div>
      <h1>EXAM 07</h1>
      <h3>useState, useEffect, useRef를 사용한 별찍기 구현</h3>
      <hr />
      <label>rownum: </label>
      <input type="text" onChange={printStar} />
      <hr />
      <div>{stars}</div>
    </div>
  );
};
export default App;
