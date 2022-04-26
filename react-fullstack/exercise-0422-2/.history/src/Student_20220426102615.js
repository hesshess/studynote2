import React from 'react';
import Stucom from './components/Stucom';
import data from './myschool';

const Student = () => {
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
            return <Stucom item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default StudentGet;
