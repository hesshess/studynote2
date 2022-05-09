import React from 'react';

const PrintStars = () => {
  const result = React.useRef();
  const [number, setNum] = React.useState(0);
  const onChange = (e) => {
    setNum(e.target.value);
  };
  React.useEffect(() => {
    let str = '';
    for (let i = 0; i < number; i++) {
      str += '*';
    }
    result.current.innerHTML = str;
  }, [number]);
  return (
    <div>
      <input type="number" onChange={onChange} value={number} />
      <div ref={result}></div>
    </div>
  );
};

export default PrintStars;
