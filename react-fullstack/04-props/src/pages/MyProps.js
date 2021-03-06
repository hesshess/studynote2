import React from 'react';

import MyPropsSub from '../components/MyPropsSub';

import Meta from '../components/Meta';

const MyProps = () => {
  console.clear();

  return (
    <div>
      {/**Route 처리를 적용받는 페이지에서 이 컴포넌트를 중복사용시 App.js에서의 설정을 덮어쓰게 된다. */}
      <Meta
        title="MyProps.js"
        description="여기는 MyProps.js"
        url={window.location.href}
      />

      <h2>MyProps</h2>

      {/**컴포넌트에게 props 전달하기 -문자열 값은 따옴표로 감싼다. 그외의 평식을 '{}' 로 감싼다 */}
      <MyPropsSub />
      <MyPropsSub name="민호" age="19" />
      <MyPropsSub name="수영" age={21} />
    </div>
  );
};

export default MyProps;
