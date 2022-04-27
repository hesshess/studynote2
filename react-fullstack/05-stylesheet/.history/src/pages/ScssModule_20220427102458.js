import React from 'react';

/**scss 모듈참조 --> 참조변수 이름을 지정한다 */
import myScssMod from '../assets/scss/style.module.scss';

/**
 * SCSS 모듈가용하기
 */

const ScssModule = () => {
  return (
    <div>
      <h2>ScssModule</h2>

      <div className={myScssMod.myScss}>
        <di className={[myScssMod.myScssBox, MyScssMod.red].join(' ')} />
        <di className={[myScssMod.myScssBox, MyScssMod.green].join(' ')} />
        <di className={[myScssMod.myScssBox, MyScssMod.blue].join(' ')} />
        <di className={[myScssMod.myScssBox, MyScssMod.orange].join(' ')} />
        <di className={[myScssMod.myScssBox, MyScssMod.yellow].join(' ')} />
        <di className={[myScssMod.myScssBox, MyScssMod.pink].join(' ')} />
      </div>
    </div>
  );
};

export default ScssModule;
