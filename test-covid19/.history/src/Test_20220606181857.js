import React, { memo } from 'react';

import dayjs from 'dayjs';

const Test = memo(() => {
  var date = dayjs('2021-10-11');

  date.format();
  console.log(date);

  date.add(1, 'year').format(); // 2022-10-11T10:30:25+09:00
  date.add(1, 'y').format(); // 2022-10-11T10:30:25+09:00
  console.log(date);
  date.add(1, 'month').format(); // 2021-11-11T10:30:25+09:00
  date.add(1, 'M').format(); // 2021-11-11T10:30:25+09:00
  console.log(date);
  date.add(1, 'week').format(); // 2021-10-18T10:30:25+09:00
  date.add(1, 'w').format(); // 2021-10-18T10:30:25+09:00
  console.log(date);
  date.add(1, 'day').format(); // 2021-10-12T10:30:25+09:00
  date.add(1, 'd').format(); // 2021-10-12T10:30:25+09:00
  console.log(date);

  return <></>;
});

export default Test;
