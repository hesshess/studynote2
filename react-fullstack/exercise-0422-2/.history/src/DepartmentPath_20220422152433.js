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

  //QueryString을 객체 형태로 변환
  const department = data.department;

  //정상 화면 출력
  return (
    <div>
      <table border="1">
        <tr>
          <th>학과번호</th>
          <th>학과이름</th>
          <th>위치</th>
        </tr>
        <tr>
          <td>{department.id}</td>
          <td>{department.dname}</td>
          <td>{department.loc}</td>
        </tr>
      </table>
    </div>
  );
};
export default DepartmentGet;
