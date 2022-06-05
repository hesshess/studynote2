import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuLink from './MenuLink';

import { useSelector, useDispatch } from 'react-redux';
import { getCovid } from '../slices/Covid19Slice';

const Top19 = memo(({ sendToApp }) => {
  const [date1, setDate1] = useState('2020-02-17');
  const [date2, setDate2] = useState('2022-05-31');
  const [disable, setDisable] = useState(true);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.covid);
  React.useEffect(() => {
    dispatch(getCovid());
  }, [dispatch]);

  const onSelect1 = (e) => {
    setDate1(e.target.value);
    setDisable(!disable);
    let data1 = data.filter((v) => {
      v['date'] == date1;
    });
    console.log(JSON.stringify(data1));
  };
  const onSelect2 = (e) => {
    setDate2(e.target.value);
    let data2 = data.filter((v) => {
      v['date'] == date2;
    });
    console.log(JSON.stringify(data2));
  };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (date1 < '2020-02-17') {
        alert('날짜를 20년 2월 17일 이후로 조정하시오');
      } else if (date2 < '2020-02-17') {
        alert('날짜를 20년 2월 17일 이후로 조정하시오');
      } else if (date1 > date2) {
        alert('첫번째 날짜는 두번째 날짜보다 빨라야 합니다');
      } else if (date2 > '2022-05-31') {
        alert('날짜를 22년 5월 31일 전으로 조정하시오');
      } else if (date1 > '2022-05-31') {
        alert('날짜를 22년 5월 31일 전으로 조정하시오');
      }
      date1 && date2 && navigate(`/confirmed?date1=${date1}&date2=${date2}`);
      sendToApp(date1, date2);
    },
    [navigate, sendToApp, date1, date2]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Covid 현황</h1>
        <input onChange={onSelect1} value={date1} type="date" />
        ~
        <input onChange={onSelect2} value={date2} type="date" />
        <button>검색</button>
      </form>

      <hr />

      {date1 && date2 && (
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
