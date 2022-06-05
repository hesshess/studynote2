import React, { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Top19 = memo(({ sendToApp }) => {
  const [date1, setDate1] = useState('2020-02-17');
  const [date2, setDate2] = useState('2022-05-31');
  const [disable, setDisable] = useState(true);

  const onSelect1 = (e) => {
    setDate1(e.target.value);
    setDisable(!disable);
  };
  const onSelect2 = (e) => {
    setDate2(e.target.value);
  };
  const navigate = useNavigate();
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
    </div>
  );
});

export default Top19;
