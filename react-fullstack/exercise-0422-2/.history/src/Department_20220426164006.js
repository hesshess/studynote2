import React from 'react';
import Depcom from './components/Depcom';

const Department = (props) => {
  //기존의 콘솔 출력 내용 삭제함
  console.clear();

  //QueryString을 객체 형태로 변환

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
          {props.departments.map((department) => {
            return <Depcom item={department} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Department;
