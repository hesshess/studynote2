import React from 'react';

import MySubComponent from './MySubComponent';

const MyComponent2 = () => {
  return (
    <div>
      <h2>virtual DOM</h2>
      <p>this is react component</p>

      <MySubComponent />
      <MySubComponent />
      <MySubComponent />
    </div>
  );
};

export default MyComponent2;
