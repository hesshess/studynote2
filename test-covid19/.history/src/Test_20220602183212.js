import React, { memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getCovid } from './slices/CovidSlice';

const Test = memo(() => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.covid);

  React.useEffect(() => {
    dispatch(getCovid());
  }, []);

  return loading ? (
    'loading...'
  ) : error ? (
    JSON.stringify(error)
  ) : (
    <>
      <h1>data</h1>
      {JSON.stringify(data)}
    </>
  );
});

export default Test;
