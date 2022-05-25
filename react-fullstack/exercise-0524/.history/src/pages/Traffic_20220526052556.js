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
const Traffic = memo(() => {
  React.useEffect(() => console.clear(), []);
  const { data, loading, error } = useSelector((state) => state.accident);
  const [year, setYear] = React.useState();
  const dispatch = useDispatch();
  let sumAccident = 0;
  let sumDeath = 0;
  let sumInjury = 0;
  React.useEffect(() => {
    dispatch(getTraffic({ year: year }));
  }, [dispatch, year]);
  const onSelectChange = React.useCallback((e) => {
    e.preventDefault();
    //드롭다운 입력값 취득
    const current = e.target;
    const value = current[current.selectedIndex].value;
    setYear(value);
  }, []);
  return (
    <div>
      <Spinner visible={loading} />
      <select name="year" onChange={onSelectChange}>
        <option value=""> -- 년도 선택 -- </option>
        {[...new Array(2018 - 2005 + 1)].map((v, i) => {
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
            <th>번호</th>
            <th>년도</th>
            <th>월</th>
            <th>교통 사고 건수</th>
            <th>사망자 수</th>
            <th>부상자 수</th>
          </thead>
          <tbody>
            {data &&
              data.map(({ id, year, month, accident, death, injury }, i) => {
                sumAccident += accident;
                sumDeath += death;
                sumInjury += injury;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{year}년</td>
                    <td>{month}월</td>
                    <td>{accident}건</td>
                    <td>{death}명</td>
                    <td>{injury}명</td>
                  </tr>
                );
              })}
            <tr key="sum" style={{ fontWeight: 'bolder' }}>
              <td colSpan="3">합계</td>
              <td>{sumAccident} 건</td>
              <td>{sumDeath} 명</td>
              <td>{sumInjury} 명</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
});
export default Traffic;
