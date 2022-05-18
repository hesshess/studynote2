import React from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from '../components/Table';

const LinkContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
`;

const TopLink = styled(NavLink)`
  margin-right: 15px;
  display: inline-block;
  font-size: 16px;
  padding: 7px 10px 5px 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #06f2;
  }
`;

const GradeList = () => {
  /**화면에 표시할 성적표 데이터를 저장하기 위한 상태 변수 */
  const [grade, setGrade] = React.useState([]);

  /**백엔드로부터 데이터 불러오기 - 자체 캐시기능 방지함 */
  const [{ data, loading1, error }, refetch] = useAxios(
    'http://localhost:3001/grade',
    {
      useCache: false,
    }
  );

  /**axios-hooks에 의해 생성된 상태값인 data가 변경되었을때 (ajax 로딩이 완료되었을때) 실행될 hook */
  React.useEffect(() => {
    //ajax의 결과를 화면에 표시하기 위한 상태값에 복사한다
    setGrade(data);
  }, [data]);

  return (
    <>
      <Spinner visible={loading1} />

      <LinkContainer>
        <TopLink to="add">성적 추가하기</TopLink>
      </LinkContainer>

      {error ? (
        <div>
          <h1>Oops~!!! {error.code} Error.</h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ) : (
        <Table>
          <thead>
            <tr>
              <th rowSpan="2">No.</th>
              <th rowSpan="2">이름</th>
              <th rowSpan="2">학년</th>
              <th rowSpan="2">성별</th>
              <th colSpan="4">과목별 점수</th>
              <th colSpan="2">집계</th>
            </tr>
            <tr>
              <th>국어</th>
              <th>영어</th>
              <th>수학</th>
              <th>과학</th>
              <th>총점</th>
              <th>평균</th>
            </tr>
          </thead>
          <tbody>
            {grade &&
              grade.map(({ id, name, level, sex, kor, eng, math, sin }, i) => {
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{level}학년</td>
                    <td>{sex}</td>
                    <td>{kor}</td>
                    <td>{eng}</td>
                    <td>{math}</td>
                    <td>{sin}</td>
                    <td>{kor + eng + math + sin}</td>
                    <td>{(kor + eng + math + sin) / 4}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default GradeList;
