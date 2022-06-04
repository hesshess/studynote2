import React, { memo } from 'react';
import styled from 'styled-components';

//상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook참조
import { useSelector, useDispatch } from 'react-redux';
import useMountedRef from '../hooks/useMountedRef';
//Slice에 정의된 액션함수들 참조
import { getCovid } from '../slices/CovidSlice';

//로딩바 컴포넌트
import Spinner from '../components/Spinner';
//테이블 CSS적용을 위한 컴포넌트
import Table from '../components/Table';
//에러정보를 표시하기 위한 컴포넌트
import ErrorView from '../components/ErrorView';
//그래프를 표시하기 위한 컴포넌트
import BarChartView from '../components/BarChartView';

//날짜 처리 라이브러리
import dayjs from 'dayjs';

//그래프와 표를 배치하기 위한 flex-box
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  .flex-item {
    flex-basis: 50%;
    box-sizing: border-box;
    padding: 10px;
  }
`;

const MovieRank = memo(() => {
  const dispatch = useDispatch();
  //redux store로 부터 ajax관련 상태값 구독
  const { data, loading, error } = useSelector((state) => state.covid);
  //검색을 위해 파라미터로 전달할 날짜값을 관리하는 상태변수
  const [targetDt_gte, setTargetDt_gte] = React.useState(
    dayjs().format('YYYY-MM-DD')
  );
  const [targetDt_lte, setTargetDt_lte] = React.useState(
    dayjs()
      .add(+1, 'd')
      .format('YYYY-MM-DD')
  );
  //이 컴포넌트가 화면에 마운트 되었는지를 확인하기 위한 hook
  const mountedRef = useMountedRef();
  //그래프에 전달할 데이터
  const [chartData, setChartData] = React.useState();

  //페이지가 열린 직후와 날짜값이 변경된 경우 리덕스 액션함수 디스패치 --> ajax 호출
  // React.useEffect(() => {
  //   dispatch(
  //     getCovid({
  //       targetDt_gte: targetDt_gte.replaceAll('-', ''),
  //       targetDt_lte: targetDt_lte.replaceAll('-', ''),
  //     })
  //   );
  // }, [dispatch, targetDt_gte, targetDt_lte]);

  const onGteChange = (e) => {
    setTargetDt_gte(e.target.value);
  };
  const onLteChange = (e) => {
    setTargetDt_lte(e.target.value);
  };
  //드롭다운의 선택이 변경된 경우의 이벤트
  const onDateChange = React.useEffect(
    (e) => {
      e.preventDefault();
      //선택값으로 상태값을 갱신한다 --> React.useEffect()에 의해 액션함수가 디스패치 된다
      dispatch(
        getCovid({
          targetDt_gte: targetDt_gte.replaceAll('-', ''),
          targetDt_lte: targetDt_lte.replaceAll('-', ''),
        })
      );
    },
    [dispatch, targetDt_gte, targetDt_lte]
  );

  React.useEffect(() => {
    //컴포넌트가 화면에 마운트된 이후에만 동작하도록 한다
    if (mountedRef.current) {
      const newData = {
        confirmed: [],
        confirmed_acc: [],
        active: [],
        released: [],
        released_acc: [],
        death: [],
        death_acc: [],
      };

      data.forEach((v, i) => {
        newData.confirmed.push(v.confirmed);
        newData.confirmed_acc.push(v.confirmed_acc);
        newData.active.push(v.active);
        newData.released.push(v.released);
        newData.released_acc.push(v.released_acc);
        newData.death.push(v.death);
        newData.death_acc.push(v.death_acc);
      });

      setChartData(newData);
    }
  }, [mountedRef, data]);

  return (
    <div>
      <Spinner visible={loading} />
      <form onSubmit={onDateChange}>
        <input
          type="date"
          className="form-control"
          placeholder="날짜선택"
          value={targetDt_gte}
          onChange={onGteChange}
        />
        <input
          type="date"
          className="form-control"
          placeholder="날짜선택"
          value={targetDt_lte}
          onChange={onLteChange}
        />
        <button>검색어가</button>
      </form>
      <hr />
      {error ? (
        <ErrorView error={error} />
      ) : (
        <Container>
          <div className="flex-item">
            <BarChartView chartData={chartData} />
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
                        <td>{v.movieNm}</td>
                        <td>{Number(v.audiCnt).toLocaleString()}명</td>
                        <td>{Number(v.salesAmt).toLocaleString()}원</td>
                        <td>{Number(v.audiAcc).toLocaleString()}명</td>
                        <td>{Number(v.salesAcc).toLocaleString()}원</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </Container>
      )}
    </div>
  );
});

export default MovieRank;
