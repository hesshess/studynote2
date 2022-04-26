import React from 'react';

//3-1 /src폴더 하위의 임의의 경로에 존재하는 이미지 파일을 참조
//-> 현재 소스파일을 기준으로 하는 상대결로로 지정
//--> 실행시에는 react에 의해 다른 경로로 복사된다.

/**
 * Inline Css를 적용한 컴포넌트
 * ex) <div style="..."></div>
 */

const InlineCss = () => {
  /**
   * 1-1 CSS로 사용될 JSON객체 정의
   * CSS속성이름은 바닐라스트립트의 프로퍼티 이름으로 지정해야함
   */
  const myStyl = {
    backgroundColor: '#f60',
    fontSize: '20px',
    color: '#0f6',
    fontWeight: 'bold',
    padding: '10px 25px',
    marginBottom: '10px',
  };
  return (
    <>
      <h2>InlineCss</h2>
    </>
  );
};
export default InlineCss;
