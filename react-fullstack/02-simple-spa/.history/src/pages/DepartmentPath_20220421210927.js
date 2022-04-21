import React from 'react';

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
  console.debug('요청된 학과번호 값=%s (%s)', params.id, typeof params.id);
  console.debug('요청된 메시지 내용=%s (%s)', params.msg, typeof params.msg);
  console.groupEnd();

  //한페이지에서 GET파라미터에 따라 다르게 표현할 데이터 준비
  //실전에서는 이값에 해당하는 JSON을 백엔드로부터 받아와야한다. ==> Ajax
  const departmentList = {
    item: [
      { id: 201, dname: '전자공학과', loc: '3호관' },
      { id: 202, dname: '기계공학과', loc: '4호관' },
    ],
  };

  //전달된 파라미터를 정수로 변환
  const id = parseInt(params.id);

  //조회결과가 저장될 객체
  let departmentItem = null;

  //미리 준비한 JSON에서 deptno값이 일치하는 정보를 조회
  departmentList.item.some((item, index) => {
    if (item.id === id) {
      departmentItem = item;
      return true;
    }
    return false;
  });

  //조회 결과가 없는 경우
  if (!departmentItem) {
    return <h2>존재하지 않는 데이터에 대한 요청입니다.</h2>;
  }

  //정상 화면 출력
  return (
    <div>
      <h2>{departmentItem.dname}</h2>
      <ul>
        <li>학과번호: {departmentItem.deptno}</li>
        <li>학과위치: {departmentItem.loc}</li>
      </ul>
    </div>
  );
};
export default DepartmentPath;
