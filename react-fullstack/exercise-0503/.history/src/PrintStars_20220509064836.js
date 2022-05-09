import React from 'react';

const PrintStars = () => {
  const result = React.useRef();
  const [stars, setStars] = React.useState(0);
  const onChangeValue = (e) => {
    const num = e.currentTarget.value;
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