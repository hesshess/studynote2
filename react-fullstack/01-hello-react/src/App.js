import React from 'react';

import MyComponent1 from './MyComponent1';
import MyComponent2 from './MyComponent2';

/*
(2) app이라는 이름의 함수형 컴포넌트 (재상용 가능한 HTML조각단위) 정의)
프로젝트에서 컴포넌트를 렌더링(화면에 출력)하면 함수에서 반환하고 있는 내용이 브라우저에 나타난다
반환되는 HTML코드는 JSX문법을 사용한다
JSX--> XML과 비슷한 React전용 JS확장 문법
*/

function App() {
  return (
    <div>
      <h1>hello react</h1>
      <MyComponent1></MyComponent1>
      <MyComponent2 />
    </div>
  );
}

export default App;
