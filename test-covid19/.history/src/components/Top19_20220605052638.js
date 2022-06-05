import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCovid } from '../slices/Covid19Slice';
import MenuLink from './MenuLink';
import Spinner from './Spinner';
import ErrorView from './ErrorView';

const Top19 = memo(() => {
  const [date1, setDateId1] = useState(0);
  const [date2, setDateId2] = useState(0);
  const [disable, setDisable] = useState(true);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.covid);

  React.useEffect(() => {
    dispatch(getCovid({ date_gte: date1, date_lte: date2 }));
  }, [dispatch, date1, date2]);

  const onSelect1 = (e) => {
    setDateId1(e.target.value);
    setDisable(!disable);
  };
  const onSelect2 = (e) => {
    setDateId2(e.target.value);
    if (date1 > date2) {
      alert('날짜를 조정하시오');
    }
  };

  const navigate = useNavigate();
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      date1 &&
        date2 &&
        navigate(`/confirmed?date_gte=${date1}&date_lte=${date2}`);
    },
    [navigate, date1, date2]
  );

  return (
    <div>
      <Spinner visible={loading} />
      <form onSubmit={onSubmit}>
        <h1>Covid 현황</h1>
        <select onChange={onSelect1} value={date1}>
          <option key="ph" value={''}>
            연도. 월. 일
          </option>
          {data &&
            data.map(({ id, date }) => (
              <option key={id} value={date}>
                {date.slice(0, 10)}
              </option>
            ))}
        </select>
        ~
        <select onChange={onSelect2} value={date2} disabled={disable}>
          <option key="ph" value={''}>
            연도. 월. 일
          </option>
          {data &&
            data.map(({ id, date }) => (
              <option key={id} value={date}>
                {date.slice(0, 10)}
              </option>
            ))}
        </select>
        <button>검색</button>
      </form>

      <hr />
      {error ? (
        <ErrorView error={error} />
      ) : (
        <nav>
          <MenuLink to={`/confirmed`} data={data}>
            일일확진자
          </MenuLink>
          <MenuLink to={`/confirmed_acc`} data={data}>
            누적확진자
          </MenuLink>
          <MenuLink to={`/active`} data={data}>
            격리환자
          </MenuLink>
          <MenuLink to={`/released`} data={data}>
            격리해제
          </MenuLink>
          <MenuLink to={`/released_acc`} data={data}>
            누적격리해제
          </MenuLink>
          <MenuLink to={`/death`} data={data}>
            사망자
          </MenuLink>
          <MenuLink to={`/death_acc`} data={data}>
            누적사망자
          </MenuLink>
        </nav>
      )}
    </div>
  );
});

export default Top19;
