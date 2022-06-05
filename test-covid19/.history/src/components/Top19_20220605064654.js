import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCovid } from '../slices/Covid19Slice';

import MenuLink from './MenuLink';

const Top19 = memo(() => {
  const [date1, setDate1] = useState(0);
  const [date2, setDate2] = useState(0);
  const [disable, setDisable] = useState(true);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.covid);

  React.useEffect(() => {
    dispatch(getCovid());
  }, []);

  const onSelect1 = (e) => {
    setDate1(e.target.value);
    setDisable(!disable);
  };
  const onSelect2 = (e) => {
    setDate2(e.target.value);
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

      {
        <>
          <nav>
            <MenuLink to={`/confirmed?date_gte=${date1}&date_lte=${date2}`}>
              일일확진자
            </MenuLink>
            <MenuLink to={`/confirmed_acc?date_gte=${date1}&date_lte=${date2}`}>
              누적확진자
            </MenuLink>
            <MenuLink to={`/active?date_gte=${date1}&date_lte=${date2}`}>
              격리환자
            </MenuLink>
            <MenuLink to={`/released?date_gte=${date1}&date_lte=${date2}`}>
              격리해제
            </MenuLink>
            <MenuLink to={`/released_acc?date_gte=${date1}&date_lte=${date2}`}>
              누적격리해제
            </MenuLink>
            <MenuLink to={`/death?date_gte=${date1}&date_lte=${date2}`}>
              사망자
            </MenuLink>
            <MenuLink to={`/death_acc?date_gte=${date1}&date_lte=${date2}`}>
              누적사망자
            </MenuLink>
          </nav>
        </>
      }
    </div>
  );
});

export default Top19;
