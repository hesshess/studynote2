/**
 * HTTP GET 파라미터를 전달받는 페이지
 */
import React from 'react';

//GET파라미터 추출 기능을 갖는 useLocation() 함수를 react-router-dom 패키지로부터 참조함
import { useLocation } from 'react-router-dom';
import data from './myschool';

const DepartmentGet = () => {
  //기존의 콘솔 출력 내용 삭제함
  console.clear();

  //요청 데이터 확인하기
  const dept = useLocation();

  console.group('useLocation()의 리턴값 확인');
  console.debug(dept);
  console.log(dept);
  console.groupEnd();

  //QueryString을 객체 형태로 변환
  const department = data.department;
  console.log(department);
};
export default DepartmentGet;
