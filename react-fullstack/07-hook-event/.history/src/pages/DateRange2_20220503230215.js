import React from 'react';
import dayjs from 'dayjs'; //for 날짜 처리

/**
 * useReduce() 기능을 사용하여 상황에 따라 state값을 다르게 설정하는 함수
 * @param {object} state - 현재 화면에 표시되고 있는 상태값
 * @param {string} action - 날짜 간격을 의미하는 문자열
 * @return 화면
 */
const setDateValue = (state, action) => {
  const day = dayjs();

  let sdate = null;

  switch (action) {
    case 'DAY7':
      sdate = day.add(-7, 'd').format('YYYY-MM-DD');
      break;
    case 'DAY15':
      sdate = day.add(-15, 'd').format('YYYY-MM-DD');
      break;
    case 'MONTH1':
      sdate = day.add(-1, 'M').format('YYYY-MM-DD');
      break;
    case 'MONTH3':
      sdate = day.add(-3, 'M').format('YYYY-MM-DD');
      break;
    case 'MONTH6':
      sdate = day.add(-6, 'M').format('YYYY-MM-DD');
      break;
    default:
      sdate = day.format('YYYY-MM-DD');
      break;
  }
};
