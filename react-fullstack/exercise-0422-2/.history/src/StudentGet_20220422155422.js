/**
 * HTTP GET 파라미터를 전달받는 페이지
 */
import React from 'react';

import data from './myschool';

const StudentGet = () => {
  //기존의 콘솔 출력 내용 삭제함
  console.clear();

  //QueryString을 객체 형태로 변환
  const student = data.student;

  //정상 화면 출력
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>학생번호</th>
            <th>학생이름</th>
            <th>학년</th>
            <th>주민번호</th>
            <th>생년월일</th>
            <th>연락처</th>
            <th>키</th>
            <th>몸무게</th>
            <th>소속학과번호</th>
            <th>담당교수번호</th>
          </tr>
        </thead>
        <tbody>
          {student.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.grade}</td>
                <td>{item.idnum}</td>
                <td>{item.sal}</td>
                <td>{new Date(item.birthdate).toLocaleDateString()}</td>
                <td>{item.tel}</td>
                <td>{item.height}</td>
                <td>{item.weight}</td>
                <td>{item.deptno}</td>
                <td>{item.profno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default StudentGet;
