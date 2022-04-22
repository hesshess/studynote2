/**PATH 파라미터를 전달받는 페이지 */
import React from 'react';
import { data } from './myschool';

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

  return (
    <div>
      <table border="1">
        <tr>
          <th>학과번호</th>
          <th>학과이름</th>
          <th>위치</th>
        </tr>
        <tr>
          {data.map((item, index) => {
            return <td key={index}>{item}</td>;
          })}
        </tr>
      </table>
    </div>
  );
};
export default DepartmentPath;
