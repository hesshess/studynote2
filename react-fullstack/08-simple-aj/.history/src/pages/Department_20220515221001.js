import React from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';

const Department = () => {
  //현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
  const [loading, setLoading] = React.useState(false);
  //화면에 표시할 상태값(ajax연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  const [department, setDepartment] = React.useState([]);

  /**페이지가 처음 열렸을때 실행할 hook */
  React.useEffect(() => {
    //ajax로딩 시작을 알림
    setLoading(true);

    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get('http://localhost:3001/department');

          //일반 상태값 업데이트
          //setDepartment(response.data);
          //함수형 업데이트
          setDepartment((department) => response.data);
        } catch (e) {
          console.error(e);
          alert('ajax연동 실패');
        } finally {
          //ajax 로딩 종료를 알림
          setLoading(false);
        }
      })();
    }, 500);
  }, []);

  return (
    <>
      <Spinner visible={loading} />

      <h2>학과목록</h2>

      <hr />

      <table border="1">
        <thead>
          <tr>
            <th>학과번호</th>
            <th>학과명</th>
            <th>학과위치</th>
          </tr>
        </thead>
        <tbody>
          {department.length > 0 ? (
            department.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.dname}</td>
                  <td>{item.loc}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="3" align="center">
                검색결과가 없습니다
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default React.memo(Department);
