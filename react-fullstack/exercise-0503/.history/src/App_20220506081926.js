import React from 'react';

const PrintStar = () => {
  const div = React.useRef();
  const [numStars, setNumStars] = React.useState(0);
  const rowNumStars = (e) => {
    setNumStars(e.currentTarget.value);
  };
  React.useEffect(() => {
    div.current.innerHTML = '';
    for (let i = 0; i < numStars; i++) {
      for (let j = 0; j < i + 1; j++) {
        div.current.innerHTML += '*';
      }
      div.current.innerHTML += '<br />';
    }
  }, [numStars]);

  return (
    <div className="App">
      <h3>useState, useEffect, useRef를 사용한 별찍기 구현</h3>
      <hr />
      <input type="number" value={numStars} onChange={rowNumStars} />
      <hr />
      <div ref={div}></div>
    </div>
  );
};

const App()={
  return(
  
  <PrintStar/>
  
  )
};
export default App;
