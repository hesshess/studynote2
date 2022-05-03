import { useState, useEffect, useRef } from 'react';
function App() {
  const myResult = useRef();
  const [rownum, setRownum] = useState('0');
  useEffect(() => {
    myResult.current.innerHTML = '';
    for (let i = 0; i < rownum; i++) {
      for (let j = 0; j <= i; j++) {
        myResult.current.innerHTML += '*';
      }
      myResult.current.innerHTML += '<br />';
    }
  }, [rownum]);
  return (
    <div>
      <h1>Exam 07</h1>
      <p>useState, useEffect, useRef를 사용한 별찍기 구현</p>
      <hr />
      <label htmlFor="rownum">rownum: </label>
      <input
        type="text"
        id="rownum"
        onChange={(e) => {
          setRownum(e.currentTarget.value);
        }}
      ></input>
      <hr />
      <div className="myResult" ref={myResult}></div>
    </div>
  );
}
export default App;
