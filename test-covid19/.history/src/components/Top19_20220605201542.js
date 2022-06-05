import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MenuLink from './MenuLink';

const Top19 = memo(({ sendToApp }) => {
  const [date1, setDate1] = useState('2020-02-17');
  const [date2, setDate2] = useState('2022-05-31');
  const [disable, setDisable] = useState(true);

  const onSelect1 = (e) => {
    switch (date1) {
      case date1 < '2020-02-17':
      case date1 > '2022-05-31':
        alert('날짜를 조정하시오');
        break;
      default:
        break;
    }
    setDate1(e.target.value);
    setDisable(!disable);
  };
  const onSelect2 = (e) => {
    switch ((date1, date2)) {
      case date2 < '2020-02-17':
      case date1 > date2:
      case date2 > '2022-05-31':
        alert('날짜를 조정하시오');
        break;
      default:
        break;
    }
    setDate2(e.target.value);
  };

  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // if (date1 < '2020-02-17'){
      //   alert('날짜를 조정하시오');
      // }else if(date1 > date2){
      //   alert('날짜를 조정하시오');
      // }else if(date2 > '2022-05-31'){
      //   alert('날짜를 조정하시오');
      // }
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
