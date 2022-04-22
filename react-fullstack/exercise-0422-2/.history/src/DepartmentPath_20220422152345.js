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

  //한페이지에서 GET파라미터에 따라 다르게 표현할 데이터 준비
  //실전에서는 이값에 해당하는 JSON을 백엔드로부터 받아와야한다. ==> Ajax
  const departmentList = {
    item: [
      { id: 101, dname: '컴퓨터공학과', loc: '1호관' },
      { id: 102, dname: '멀티미디어학과', loc: '2호관' },
    ],
  };

  //전달된 파라미터를 정수로 변환
  const id = parseInt(query.get('id'));

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
