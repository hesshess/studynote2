import React from 'react';
import GradeData from '../GradeData';

/**
 * props
 * ->컴포넌트를 사용하는 부모로부터 전달받는 변수값이 포함되어 있는 객체
 * 필요한 경우에만 선언한다
 * 흔히 컴포넌트에게 HTML 속성 같은 형태로 전달된다
 */

const MyPropsSub = (props) => {

  return (
    <tr>
    <td>{.id}</td>
    <td>{item.dname}</td>
    <td>{item.loc}</td>
  </tr>
    
  );
};

//속성값이 전달되지 않을 경우에 대비하여 기본값을 JSON으로 정의해 둘수있다
//{defaultProps 객체이름 고정}
//권장사항
MyPropsSub.defaultProps = {
  name: '무명',
  age: '20',
};

export default MyPropsSub;
