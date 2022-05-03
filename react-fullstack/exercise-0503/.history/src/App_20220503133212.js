import React from 'react';
const App = () => {
  console.clear();
  const [myInputRef, myResultRef] = React.useRef();

  const printStar = (value) => {
    let stars = '';
    for (let i = 0; i < value; i++) {
      let str = '';
      for (let j = 0; j < i + 1; j++) {
        str += '*';
      }
      stars += `<p>${str}</p>`;
    }
    myResultRef.current.innerHTML = stars;
  };
  return (
    <div>
      <h1>EXAM 07</h1>
      <h3>useState, useEffect, useRef를 사용한 별찍기 구현</h3>
      <hr />
      <label>rownum: </label>
      <input
        type="text"
        ref={myInputRef}
        onChange={(e) => {
          printStar(e.currentTarget.value);
        }}
      />
      <hr />
      <div ref={myResultRef}></div>
    </div>
  );
};
export default App;
