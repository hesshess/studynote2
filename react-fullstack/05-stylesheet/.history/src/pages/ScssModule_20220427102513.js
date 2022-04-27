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
        <di className={[myScssMod.myScssBox, myScssMod.red].join(' ')} />
        <di className={[myScssMod.myScssBox, myScssMod.green].join(' ')} />
        <di className={[myScssMod.myScssBox, myScssMod.blue].join(' ')} />
        <di className={[myScssMod.myScssBox, myScssMod.orange].join(' ')} />
        <di className={[myScssMod.myScssBox, myScssMod.yellow].join(' ')} />
        <di className={[myScssMod.myScssBox, myScssMod.pink].join(' ')} />
      </div>
    </div>
  );
};

export default ScssModule;
