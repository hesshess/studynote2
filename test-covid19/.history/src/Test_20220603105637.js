import React, { memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getCovid } from './slices/Covid19Slice';

const Test = memo(() => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.covid);

  React.useEffect(() => {
    dispatch(getCovid({ covid }));
  }, [dispatch]);

  return loading ? (
    'loading...'
  ) : error ? (
    JSON.stringify(error)
  ) : (
    <>
      <h1>Data</h1>
      {JSON.stringify(data)}
    </>
  );
});

export default Test;
