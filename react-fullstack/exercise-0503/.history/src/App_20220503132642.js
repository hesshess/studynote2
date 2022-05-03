import React from 'react';
const App = () => {
  console.clear();
  const myStar = React.useRef();
  const myResult = React.useRef();
  const printStar = (value) => {
    let stars = '';
    for (let i = 0; i < value; i++) {
      let str = '';
      for (let j = 0; j < i + 1; j++) {
        str += '*';
      }
      stars += `<p>${str}</p>`;
    }
    myResult.current.innerHTML = stars;
  };
  return (
    <div>
      <h1>연습문제 - 별찍기</h1>
      <p>useState, useEffect, useRef를 사용한 별찍기 구현</p>
      <hr />
      <label htmlFor="myStar">단 수: </label>
      <input
        type="text"
        ref={myStar}
        id="myStar"
        onChange={(e) => {
          printStar(e.currentTarget.value);
        }}
      />
      <hr />
      <div ref={myResult}></div>
    </div>
  );
};
export default App;
