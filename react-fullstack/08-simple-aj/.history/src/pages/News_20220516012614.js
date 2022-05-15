/**
 * 05-stylesheet 단원의 '/components/NewsList.js' 를 이 단원의 '/pages/News.js'로 복사
 */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from '../components/NewsItem';

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const NewsList = () => {
  //화면에 표시할 상태값 (ajax연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  const [newsList, setNewsList] = React.useState([]);

  /**페이지가 처음 열ㄹ렸을때 실행할 hook */
  React.useEffect(() => {
    (async () => {
      //ajax처리 결과가 저장될 변수
      let json = null;

      try {
        const response = await axios.get('http://localhost:3001/news');
        json = response.data;
      } catch (e) {
        console.error(e);
        alert('Ajax 연동 실패');
      }

      //ajax 연동결과가 있다면 그 결과를 상태값에 적용함
      if (json != null) {
        setNewsList(json);
      }
    })();
  }, []);

  return (
    <div>
      <listContainer>
        {newsList.map((v, i) => (
          <NewsItem key={i} item={v} />
        ))}
      </listContainer>
    </div>
  );
};

//React.memo()를 사용하여 함수형 컴포넌트의 리렌더링 성능을 최적화
export default React.memo(NewsList);
