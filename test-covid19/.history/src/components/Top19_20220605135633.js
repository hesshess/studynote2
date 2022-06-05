import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCovid } from '../slices/Covid19Slice';

import MenuLink from './MenuLink';

const Top19 = memo(() => {
  const [date1, setDate1] = useState('20-02-17');
  const [date2, setDate2] = useState('22-05-31');
  const [disable, setDisable] = useState(true);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.covid);

  React.useEffect(() => {
    dispatch(getCovid({ date_gte: date1, date_lte: date2 }));
  }, [dispatch, date1, date2]);

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
      date1 && date2 && navigate(`/confirmed?date1=${date1}&date2=${date2}`);
    },
    [navigate, date1, date2]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Covid 현황</h1>
        <input
          onChange={onSelect1}
          value={date1}
          type="date"
          min={data && data[0].date.slice(0, 10)}
          max={data && data[data.length - 1].date.slice(0, 10)}
        />
        ~
        <input
          onChange={onSelect2}
          value={date2}
          type="date"
          min={data && data[0].date.slice(0, 10)}
          max={data && data[data.length - 1].date.slice(0, 10)}
        />
        <button>검색</button>
      </form>

      <hr />

      {data && (
        <nav>
          <MenuLink to={`/confirmed?date1=${date1}&date2${date2}`}>
            일일확진자
          </MenuLink>
          <MenuLink to={`/confirmed_acc?date1=${date1}&date2=${date2}`}>
            누적확진자
          </MenuLink>
          <MenuLink to={`/active?date1=${date1}&date2=${date2}`}>
            격리환자
          </MenuLink>
          <MenuLink to={`/released?date1=${date1}&date2=${date2}`}>
            격리해제
          </MenuLink>
          <MenuLink to={`/released_acc?date1=${date1}&date2=${date2}`}>
            누적격리해제
          </MenuLink>
          <MenuLink to={`/death?date1=${date1}&date2=${date2}`}>
            사망자
          </MenuLink>
          <MenuLink to={`/death_acc?date1=${date1}&date2=${date2}`}>
            누적사망자
          </MenuLink>
        </nav>
      )}
    </div>
  );
});

export default Top19;
