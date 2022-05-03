import React from 'react';

const App = () => {
  const ref = useRef();
  const [rowNum, setRownum] = useState(0);
  const handleKeyUp = (e) => {
  setRownum(e.currentTarget.value);
  useEffect(() => {
    container.current.innerHTML = '';
    for(let i = 0; i < rowNum; i++){
    for(let j=0; j < i+1; j++){
    container.current.innerHTML += '*';
    }
    container.current.innerHTML += '<br />';
    }
    },[rowNum]);

  return (
    <div>
      <h1>연습문제 0503</h1>
      <h2>별찍기 구현</h2>
      <input type="number" onKeyUp={handleKeyUp} />
      <div ref={ref}></div>
    </div>
  );
};
export default App;
