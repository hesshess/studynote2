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
  const dispatch = useDispatch();
  //redux store로 부터 ajax관련 상태값 구독
  const { data, loading, error } = useSelector((state) => state.trafficAcc);
  //검색을 위해 파라미터로 전달할 날짜값을 관리하는 상태변수
  const [targetYr, setTargetYr] = React.useState([]);
  const [sum, setSum] = React.useState([]);
  const mountedRef = useMountedRef();
  //페이지가 열린 직후와 날짜값이 변경된 경우 리덕스 액션함수 디스패치 --> ajax 호출
  React.useEffect(() => {
    dispatch(getTraffic());
  }, [dispatch, targetYr]);
  //드롭다운의 선택이 변경된 경우의 이벤트

  const onYrChange = React.useCallback((e) => {
    e.preventDefault();
    //선택값으로 상태값을 갱신한다 --> React.useEffect()에 의해 액션함수가 디스패치 된다
    setTargetYr(e.target.value);
  }, []);

  React.useEffect(() => {
    //컴포넌트가 화면에 마운트된 이후에만 동작하도록 한다
    if (mountedRef.current) {
      setSum(
        data.reduce((v, i) => {
          v[0] += i.accident;
          v[1] += i.death;
          v[2] += i.injury;
          return v;
        }, [])
      );
    }
  }, [mountedRef, data]);
  return (
    <div>
      <Spinner visible={loading} />
      <select name="year" onChange={onYrChange}>
        <option value="">-- 년도 선택 --</option>
        {[...new Array(2018 - 2005 + 1)].map((v, i) => {
          return (
            <option key={i} value={2005 + i}>
              {2005 + i}년도
            </option>
          );
        })}
      </select>
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
              <td colSpan={2}>합계</td>
              <td>
                {data &&
                  data
                    .map((v, i) => v.accident)
                    .reduce((p, c) => p + c, 0)
                    .toLocaleString()}
                건
              </td>
              <td>
                {data
                  .map((v, i) => v.death)
                  .reduce((p, c) => p + c, 0)
                  .toLocaleString()}
                명
              </td>
              <td>
                {data
                  .map((v, i) => v.injury)
                  .reduce((p, c) => p + c, 0)
                  .toLocaleString()}
                명
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
});

export default Traffic;
