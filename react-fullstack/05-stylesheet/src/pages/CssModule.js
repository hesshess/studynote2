import React from 'react';

import myStyles from '../assets/css/myStyles.module.css';

const CssModule = () => {
  return (
    <>
      <h2>CssModule</h2>

      <h3>변수에 저장된 css 클래스</h3>
      <div className={myStyles.myCssBox} />

      <h3>독립 클래스</h3>
      <div className="myBorderBox"></div>

      <h3>다중 클래스 적용(1) - 역따옴표 사용</h3>
      <div className={`${myStyles['my-size']} ${myStyles['my-bg']}`}></div>

      <h3>다중 클래스 적용 (2) - 배열로 구성한 후 join함수로 결합</h3>
      <div className={[myStyles['my-size'], myStyles['my-bg']].join(' ')} />
    </>
  );
};
export default CssModule;
