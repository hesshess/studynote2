/**
 * HTTP GET 파라미터를 전달받는 페이지
 */
import React from 'react';
import Procom from './components/Procom';

const Professor = (props) => {
  //기존의 콘솔 출력 내용 삭제함
  console.clear();

  //정상 화면 출력
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>교수번호</th>
            <th>교수이름</th>
            <th>아이디</th>
            <th>직급</th>
            <th>급여</th>
            <th>입사일</th>
            <th>보직수당</th>
            <th>소득학과번호</th>
          </tr>
        </thead>
        <tbody>
          {props.professors.map((item) => {
            return <Procom item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Professor;
