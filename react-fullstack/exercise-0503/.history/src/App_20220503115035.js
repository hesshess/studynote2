import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const divRef = useRef(null);
  const [rowNum, setRowNum] = useState(0);
  const handleKeyUp = (event) => {
    if (event.key == 'Enter') setRowNum(event.currentTarget.value);
  };

  const printStar = useEffect(() => {
    let str = '\n\n';
    for (let i = 1; i <= rowNum; i++) {
      for (let j = 1; j <= i; j++) {
        str += '*';
      }
      str += '\n';
    }

    divRef.current.innerText = str;
  }, [rowNum]);
  return (
    <div>
      <h1>Practice 07</h1>
      <h2>별찍기</h2>
      <input type="number" onKeyUp={handleKeyUp} />
      <div ref={divRef}></div>
    </div>
  );
};
export default App;
