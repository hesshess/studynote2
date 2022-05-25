import React, { memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getTraffic } from '../slices/TrafficSlice';
// 로딩바 컴포넌트
import Spinner from '../components/Spinner';
// 테이블 CSS 적용을 위한 컴포넌트
import Table from '../components/Table';
// 에러정보를 표시하기 위한 컴포넌트
import ErrorView from '../components/ErrorView';

const Traffic = memo(() => {
  const dispatch = useDispatch();
  // 합계를 구하기 위한 변수
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  // Redux Store로부터 Ajax관련 상태값 구독
  const { data, loading, error } = useSelector((state) => state.trafficAcc);
  // 각 드롭다운의 선택 상태를 저장하기 위한 상태변수
  const [targetDt, setTargetDt] = React.useState('');
  // 컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 디스패치 함
  React.useEffect(() => {
    if (targetDt > 0) {
      dispatch(getTraffic(targetDt));
    } else {
      dispatch(getTraffic());
    }
  }, [dispatch, targetDt]);
  // 드롭다운의 선택이 변경된 경우의 이벤트
  const onSelectChange = React.useCallback((e) => {
    e.preventDefault();
    setTargetDt(e.target.value);
  }, []);
  return (
    <div>
      <Spinner visible={loading} />

      {/* 검색 조건 드롭다운 박스 */}

      <select name="year" onChange={onSelectChange}>
        <option value="">--년도 선택--</option>
        {[...new Array(2018 - 2008 + 1)].map((v, i) => {
          return (
            <option key={i} value={2005 + i}>
              {2005 + i}년도
            </option>
          );
        })}
      </select>

      {error ? (
        <ErrorView error={error} />
      ) : (
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>년도</th>
              <th>월</th>
              <th>교통사고 건수</th>
              <th>사망자 수</th>
              <th>부상자 수</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(({ id, year, month, accident, death, injury }, i) => {
                sum1 += accident;
                sum2 += death;
                sum3 += injury;
                return (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{year}년</td>
                    <td>{month}월</td>
                    <td>{accident.toLocaleString()}건</td>
                    <td>{death.toLocaleString()}명</td>
                    <td>{injury.toLocaleString()}명</td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3">합계</th>

              <th>{sum1.toLocaleString()}건</th>

              <th>{sum2.toLocaleString()}명</th>

              <th>{sum3.toLocaleString()}명</th>
            </tr>
          </tfoot>
        </Table>
      )}
    </div>
  );
});
export default Traffic;
