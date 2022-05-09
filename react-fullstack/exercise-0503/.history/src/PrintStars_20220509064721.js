import React from 'react';

const PrintStars = () => {
  const result = React.useRef();
  const [stars, setStars] = React.useState(0);
  const onChangeValue = (current) => {
    const num = current.target.value;
    setStars(num);
  };

  return (
    <div>
      <input type="number" onChange={onChangeValue} value={stars} />
      <div ref={result}></div>
    </div>
  );
};

export default PrintStars;
