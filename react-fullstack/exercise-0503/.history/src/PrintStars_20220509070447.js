import React from 'react';

const PrintStars = () => {
  const result = React.useRef();
  const [stars, setStars] = React.useState(0);
  const onChange = (e) => {
    const num = e.target.value;
    setStars(num);
  };

  return (
    <div>
      <input type="number" onChange={onChange} value={stars} />
      <div ref={result}></div>
    </div>
  );
};

export default PrintStars;
