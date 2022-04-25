import React from 'react';
import data from '../GradeData';

/**
 * props
 * ->컴포넌트를 사용하는 부모로부터 전달받는 변수값이 포함되어 있는 객체
 * 필요한 경우에만 선언한다
 * 흔히 컴포넌트에게 HTML 속성 같은 형태로 전달된다
 */

const MyDataSub = (item) => {
  const sum = item.kor + item.eng + item.mth + item.sci;
  const avg = sum / 4;
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.grade}</td>
      <td>{item.gender}</td>
      <td>{item.kor}</td>
      <td>{item.eng}</td>
      <td>{item.mth}</td>
      <td>{item.sci}</td>
      <td>{sum}</td>
      <td>{avg}</td>
    </tr>
  );
};

//속성값이 전달되지 않을 경우에 대비하여 기본값을 JSON으로 정의해 둘수있다
//{defaultProps 객체이름 고정}
//권장사항
MyDataSub.defaultProps = {
  kor: '미응시',
  eng: '미응시',
  mth: '미응시',
  sci: '미응시',
};

export default MyDataSub;
