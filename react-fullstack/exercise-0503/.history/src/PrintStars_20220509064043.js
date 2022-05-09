import React from 'react';

const PrintStars = () => {
  const [stars, setStars] = React.useState(0);
  const onChangeValue = () => {
    setStars((current) => current.target.value);
  };

  return (
    <div>
      <input type="number" onChange={onChangeValue} value={stars} />
    </div>
  );
};

export default PrintStars;
