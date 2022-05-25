import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTraffic } from '../slices/TrafficSlice';
import useMountedRef from '../hooks/useMountedRef';
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
  const { data, loading, error } = useSelector((state) => state.trafficAcc);
  //검색을 위해 파라미터로 전달할 날짜값을 관리하는 상태변수
  const [targetDt, setTargetDt] = React.useState(
    dayjs().add(-1, 'd').format('YYYY-MM-DD')
  );
  const mountedRef = useMountedRef();
  //페이지가 열린 직후와 날짜값이 변경된 경우 리덕스 액션함수 디스패치 --> ajax 호출
  React.useEffect(() => {
    dispatch(getTraffic({ targetDt: targetDt.replaceAll('-', '') }));
  }, [dispatch, targetDt]);

  let sum = 0;

  return (
    <div>
      <Spinner visible={loading} />
      <form>
        <input
          type="date"
          className="form-control"
          placeholder="날짜선택"
          value={targetDt}
          onChange={onDateChange}
        />
      </form>
      <hr />

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
              data.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{v.year}년</td>
                    <td>{v.month}월</td>
                    <td>{Number(v.accident).toLocaleString()}건</td>
                    <td>{Number(v.death).toLocaleString()}명</td>
                    <td>{Number(v.injury).toLocaleString()}명</td>
                  </tr>
                );
              })}
            <tr>
              <td colSpan={3}>합계</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
});

export default Traffic;
