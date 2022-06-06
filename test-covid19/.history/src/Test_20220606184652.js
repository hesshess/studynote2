import React, { memo } from 'react';

import dayjs from 'dayjs';

const Test = memo(() => {
  var date = dayjs('2021-10-11');

  date.format();
  console.log(date.format('YYYY-MM-DD'));

  date.add(1, 'day').format(); // 2021-10-12T10:30:25+09:00
  date.add(1, 'd').format(); // 2021-10-12T10:30:25+09:00
  console.log(dayjs('2021-10-11').add(1, 'd').format('YYYY-MM-DD'));
  return <></>;
});

export default Test;
