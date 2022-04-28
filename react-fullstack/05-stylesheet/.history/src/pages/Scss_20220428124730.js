import React from 'react';

/**scss파일 참조하기 --> 참조변수 사용 안함 */
import '../assets/scss/style.scss';

/**
 * SCSS를 사용하는 컴포넌트
 *
 * 패키지 설치 필요
 *
 *      yarn add node-sass
 */

const Scss = () => {
  return (
    <div>
      <h2>Scss</h2>
      <div className="myScss">
        <div className="myScssBox red"></div>
        <div className="myScssBox green"></div>
        <div className="myScssBox blue"></div>
        <div className="myScssBox orange"></div>
        <div className="myScssBox yellow"></div>
        <div className="myScssBox pink"></div>
      </div>
    </div>
  );
};

export default Scss;
