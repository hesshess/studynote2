//react 기본 패키지 참조(필수)
import React from 'react';

import MySubComponent from './MySubComponent';

//함수 이름은 혼선방지위해 소스파일이름과 동일하게 구성하는 것이 일반적

const MyComponent1 = () => {
  //리턴은 항상 HTML구조를 의미하는 JSX문법이어야하ㅗ
  //JSX구조는 무조건 단 하나의 태그요소만 반환해야함
  //-->복잡한 구조는 부모요소하나에 모두 포함되어야한다는 의미
  return (
    <div>
      <h2>안녕 리액트</h2>
      <p>리액트 컴포넌트 구조 연습</p>

      <MySubComponent />
      <MySubComponent />
      <MySubComponent />
    </div>
  );
};

export default MyComponent1;
