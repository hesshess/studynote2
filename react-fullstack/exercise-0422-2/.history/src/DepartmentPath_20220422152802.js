/**
 * HTTP GET 파라미터를 전달받는 페이지
 */
import React from 'react';

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
        <thead>
          <tr>
            <th>학과번호</th>
            <th>학과이름</th>
            <th>위치</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{department.id}</td>
            <td>{department.dname}</td>
            <td>{department.loc}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default DepartmentGet;
