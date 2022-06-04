import React, { memo, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getCovid } from './slices/Covid19Slice';
import Spinner from './components/Spinner';
import ErrorView from './components/ErrorView';

const Test = memo(() => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.covid);

  React.useEffect(() => {
    dispatch(getCovid());
  }, [dispatch]);

  const [myDate1, setMyDate1] = useState('');
  const [myDate2, setMyDate2] = useState('');

  const onSelect1 = (e) => {
    setMyDate1(e.target.value);
  };
  const onSelect2 = (e) => {
    setMyDate2(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Spinner visible={loading} />
      {error ? (
        <ErrorView error={error} />
      ) : (
        data && (
          <form onSubmit={onSubmit}>
            <select onChange={onSelect1} value={myDate1}>
              {data.map(({ id, date }) => (
                <option key={id} value={date}>
                  {date.slice(0, 5)}
                </option>
              ))}
            </select>
            <select onChange={onSelect2} value={myDate2}>
              {data.map(({ id, date }) => (
                <option key={id} value={date}>
                  {date}
                </option>
              ))}
            </select>
            <button>검색</button>
          </form>
        )
      )}
    </div>
  );
});

export default Test;
