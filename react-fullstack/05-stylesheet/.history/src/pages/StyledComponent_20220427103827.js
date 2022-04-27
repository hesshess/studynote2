import React from 'react';

/**
 * 컴포넌트 코드 안에서 SCSS문법을 적용한 컴포넌트를 직접정의
 * 패키지 설치가 필요함.
 *          yarn add styled-components
 *
 *          VScode에서 styled-components지원을 위함 확장 프로그램
 *              -vscode-styled-components
 */
//기능 사용을 위한 참조
import styled, { css } from 'styled-components';

/**ul 태그로 구성된 컴포넌트 정의 --> styled.태그이름``; (역따옴표 주의) */
const MyGridContainer = styled.ul`
  /*scss 코딩진행 */
  list-style: none;
  padding: 0;
  margin: 0;
  width: 1024px;
  border: 5px solid #cc0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

/**li태그로 구성된 컴포넌트 정의 */
const MyGridItem = styled.li`
  /**width: 33%; */

  /**전달받은 변수값에 접급하기 위해서는 하여 넓이를 동적으로 설정 */
  /**JSX로 부터 전달받은 변수들을 props라는 이름의 객체 형태로 주입받는 콜백함수를 정의한다
이 콜백함수에서 리턴하는 값이 이위치에 적용된다 */
  /**width: ${function (props) {
    return props.width;
  }}; */
  width: ${(props) => props.width};
`;

export default StyledComponent;
