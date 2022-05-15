import React from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';

const Department = () => {
  //현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
  const [loading, setLoading] = React.useState(false);
  //화면에 표시할 상태값(ajax연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  const [department, setDepartment] = React.useState([]);
  //검색 키워드
  const [keyword, setKeyword] = React.useState('');

  /**페이지가 처음 열렸을때 검색어가 변경되었을때 실행할 hook */
  React.useEffect(() => {
    //ajax로딩 시작을 알림
    setLoading(true);

    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get('http://localhost:3001/department', {
            //검색어가 있다면 dname값으로 설정, 그렇지 않으면 정의 안함
            params: keyword ? { dname: keyword } : null,
          });

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
  }, [keyword]);

  /**검색어 입력 요소에 연결할 참조변수 */
  const myKeywordInput = React.useRef();

  /**검색 버튼에 대한 클릭 이벤트 */
  //성능 최적화를 위해 useCallback()적용함
  const onButtonClick = React.useCallback((e) => {
    setKeyword(myKeywordInput.current.value);
  }, []);

  return (
    <>
      <Spinner visible={loading} />

      <h2>학과목록</h2>

      <hr />
      <form>
        <input type="text" name="keyword" ref={myKeywordInput} />
        <button type="button" onClick={onButtonClick}>
          검색
        </button>
      </form>

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
