/**PATH 파라미터를 전달받는 페이지 */
import React from 'react';

//PATH 파라미터 추출 기능을 갖는 useParams()함수를 react-router-dom패키지로부터 참조함
import { useParams } from 'react-router-dom';

/**Path 파라미터를 전달받는 페이지 */

const DepartmentPath = () => {
  //기존의 콘솔 출력 내용 삭제함
  console.clear();

  //요청 데이터 확인하기
  const params = useParams();
  console.group('useParams() 값 확인');
  console.debug(params);
  console.groupEnd();

  //추출된 변수값과 데이터 타입 확인
  console.group('파라미터 처리 결과 확인');
  console.debug('요청된 학과번호 값=%s (%s)', params.day, typeof params.day);
  console.groupEnd();

  //한페이지에서 GET파라미터에 따라 다르게 표현할 데이터 준비
  //실전에서는 이값에 해당하는 JSON을 백엔드로부터 받아와야한다. ==> Ajax
  const dayList = {
    mon: ['맑음', '맑음'],
    tue: ['비', '맑음'],
    wed: ['맑음', '흐림'],
    thu: ['맑음', '흐림'],
    fri: ['흐림', '흐림'],
    sat: ['비', '맑음'],
    sun: ['맑음', '맑음'],
  };

  //전달된 파라미터를 정수로 변환
  const day = params.day;

  const weatherItem = dayList[day];

  //정상 화면 출력
  return (
    <div>
      <h2>{weatherItem.dname}</h2>
      <ul>
        <li>오전: {weatherItem[0]}</li>
        <li>오후: {weatherItem[1]}</li>
      </ul>
    </div>
  );
};
export default DepartmentPath;
