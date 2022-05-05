import React from 'react';
const App = () => {
  const [stars, setStars] = React.useState('');
  const starsRef = React.useRef();
  const printStar = (e) => {
    const num = e.target.value;
    let str = '';
    for (let i = 0; i < num; i++) {
      for (let j = 0; j < i + 1; j++) {
        str += '*';
      }
    }
    useEffect(() => {
      starsRef.innerHTML = '\n\n';
    }, [stars]);
    setStars(str);
  };
  return (
    <div>
      <h1>EXAM 07</h1>
      <h3>useState, useEffect, useRef를 사용한 별찍기 구현</h3>
      <hr />
      <label>rownum: </label>
      <input type="text" onChange={printStar} />
      <hr />
      <div ref={starsRef}>{stars}</div>
    </div>
  );
};
export default App;