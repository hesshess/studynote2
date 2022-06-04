import React, { memo } from 'react';
//import styled from 'styled-components';
import { useQueryString } from '../hooks/useQueryString';
//상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook참조
import { useSelector, useDispatch } from 'react-redux';
import useMountedRef from '../hooks/useMountedRef';
//Slice에 정의된 액션함수들 참조
import { getCovid } from '../slices/Covid19Slice';

//로딩바 컴포넌트
import Spinner from '../components/Spinner';
//테이블 CSS적용을 위한 컴포넌트
//import Table from '../components/Table';
//에러정보를 표시하기 위한 컴포넌트
import ErrorView from '../components/ErrorView';
//그래프를 표시하기 위한 컴포넌트
import LineChartView from '../components/LineChartView';

//그래프와 표를 배치하기 위한 flex-box

const Covid19 = memo(() => {
  const dispatch = useDispatch();
  //redux store로 부터 ajax관련 상태값 구독
  const { data, loading, error } = useSelector((state) => state.covid);
  //검색을 위해 파라미터로 전달할 날짜값을 관리하는 상태변수

  React.useEffect(() => {
    dispatch(getCovid());
  }, [dispatch]);

  const queryJson = useQueryString();
  const key1 = Object.keys(queryJson)[0];
  const val1 = parseInt(queryJson[key1]);
  const key2 = Object.keys(queryJson)[1];
  const val2 = parseInt(queryJson[key2]);
  console.log(key1.substring(0, key1.length - 1));

  //이 컴포넌트가 화면에 마운트 되었는지를 확인하기 위한 hook
  const mountedRef = useMountedRef();
  //그래프에 전달할 데이터
  const [chartData, setChartData] = React.useState();

  //ajax 연동 결과에서 그래프에 표시 할 데이터만 추려내어 chartData 상태값에 반영한다
  //ajax는 컴포넌트가 화면에 마운트됨과 동시에 실행되므로, 이 처리는 컴포넌트가 화면에 마운트 된 이후에 수행되어야만 한다
  React.useEffect(() => {
    //컴포넌트가 화면에 마운트된 이후에만 동작하도록 한다
    if (mountedRef.current) {
      const newData = [];
      data.filter((v, i) => {
        if (val1 - 1 < i && i < val2 + 1) {
          newData.push(v);
        }
      });
      console.log(newData);
    }
  }, [mountedRef, data]);

  return (
    <div>
      <Spinner visible={loading} />

      {error ? (
        <ErrorView error={error} />
      ) : (
        <div>
          <div className="flex-item">
            <LineChartView chartData={chartData} />
          </div>
          <div className="flex-item">
            <Table>
              <thead>
                <tr>
                  <th>순위</th>
                  <th>제목</th>
                  <th>관람객 수</th>
                  <th>매출액</th>
                  <th>누적 관람객 수</th>
                  <th>누적 매출액</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.boxOfficeResult.dailyBoxOfficeList.map((v, i) => {
                    return (
                      <tr key={i}>
                        <td>{v.rank}</td>
                        <td>{v.dateNm}</td>
                        <td>{Number(v.pplCnt).toLocaleString()}명</td>
                        <td>{Number(v.salesAmt).toLocaleString()}원</td>
                        <td>{Number(v.audiAcc).toLocaleString()}명</td>
                        <td>{Number(v.salesAcc).toLocaleString()}원</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
});

export default Covid19;
