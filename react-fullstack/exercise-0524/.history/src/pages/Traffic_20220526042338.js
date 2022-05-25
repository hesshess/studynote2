import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTraffic } from '../slices/TrafficSlice';

//로딩바 컴포넌트
import Spinner from '../components/Spinner';
//테이블 CSS적용을 위한 컴포넌트
import Table from '../components/Table';
//에러정보를 표시하기 위한 컴포넌트
import ErrorView from '../components/ErrorView';

//날짜 처리 라이브러리
import dayjs from 'dayjs';

const Traffic = memo(() => {
  const dispatch = useDispatch();
  //redux store로 부터 ajax관련 상태값 구독
  const { data, loading, error } = useSelector((state) => state.movieRank);
  //검색을 위해 파라미터로 전달할 날짜값을 관리하는 상태변수
  console.log(data);
  const [targetDt, setTargetDt] = React.useState(
    dayjs().add(-1, 'd').format('YYYY-MM-DD')
  );

  //페이지가 열린 직후와 날짜값이 변경된 경우 리덕스 액션함수 디스패치 --> ajax 호출
  React.useEffect(() => {
    dispatch(getTraffic({ targetDt: targetDt.replaceAll('-', '') }));
  }, [dispatch, targetDt]);

  return (
    <div>
      <Spinner visible={loading} />

      {error ? (
        <ErrorView error={error} />
      ) : (
        <Table>
          <thead>
            <tr>
              <th>년도</th>
              <th>월</th>
              <th>사건수</th>
              <th>사망자</th>
              <th>부상자</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.traffic_acc.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{v.year}</td>
                    <td>{v.month}</td>
                    <td>{Number(v.accident).toLocaleString()}건</td>
                    <td>{Number(v.death).toLocaleString()}명</td>
                    <td>{Number(v.injury).toLocaleString()}명</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </div>
  );
});

export default Traffic;
