import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getCovid } from '../slices/Covid19Slice';
import Spinner from './Spinner';
import ErrorView from './ErrorView';

import MenuLink from './MenuLink';

const Top19 = memo(() => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.covid);

  React.useEffect(() => {
    dispatch(getCovid());
  }, [dispatch]);

  const [dateId1, setDateId1] = useState(0);
  const [dateId2, setDateId2] = useState(0);
  const [disable, setDisable] = useState(true);

  const onSelect1 = (e) => {
    setDateId1(parseInt(e.target.value));
    setDisable(!disable);
  };
  const onSelect2 = (e) => {
    setDateId2(parseInt(e.target.value));
    if (dateId1 > dateId2) {
      alert('날짜를 조정하시오');
    }
  };

  const navigate = useNavigate();

  /**/

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      navigate(`?confirmed_gte=${dateId1}&confirmed_lte=${dateId2}`);
    },
    [navigate, dateId1, dateId2]
  );

  return (
    <div>
      <Spinner visible={loading} />
      {error ? (
        <ErrorView error={error} />
      ) : (
        data && (
          <form onSubmit={onSubmit}>
            <h1>Covid 현황</h1>
            <select onChange={onSelect1} value={dateId1}>
              {data.map(({ id, date }) => (
                <option key={id} value={id}>
                  {date.slice(0, 10)}
                </option>
              ))}
            </select>
            <select onChange={onSelect2} value={dateId2} disabled={disable}>
              {data.map(({ id, date }) => (
                <option key={id} value={id}>
                  {date.slice(0, 10)}
                </option>
              ))}
            </select>
            <button>검색</button>
          </form>
        )
      )}
      <hr />
      <></>
      {
        <nav>
          <MenuLink to={`?confirmed_gte=${dateId1}&confirmed_lte=${dateId2}`}>
            일일확진자
          </MenuLink>
          <MenuLink
            to={`?confirmed_acc_gte=${dateId1}&confirmed_acc_lte=${dateId2}`}
          >
            누적확진자
          </MenuLink>
          <MenuLink to={`?active_gte=${dateId1}&active_lte=${dateId2 + 1}`}>
            격리환자
          </MenuLink>
          <MenuLink to={`?released_gte=${dateId1}&released_lte=${dateId2}`}>
            격리해제
          </MenuLink>
          <MenuLink
            to={`?released_acc_gte=${dateId1}&released_acc_lte=${dateId2}`}
          >
            누적격리해제
          </MenuLink>
          <MenuLink to={`?death_gte=${dateId1}&death_lte=${dateId2}`}>
            사망자
          </MenuLink>
          <MenuLink to={`?death_acc_gte=${dateId1}&death_acc_lte=${dateId2}`}>
            누적사망자
          </MenuLink>
        </nav>
      }
    </div>
  );
});

export default Top19;
