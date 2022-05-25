import React, { memo } from 'react';

//상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook참조
import { useSelector, useDispatch } from 'react-redux';
import useMountedRef from '../hooks/useMountedRef';
//Slice에 정의된 액션함수들 참조
import { getTraffic } from '../slices/TrafficSlice';

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
  const [targetDt, setTargetDt] = React.useState();
  //이 컴포넌트가 화면에 마운트 되었는지를 확인하기 위한 hook
  const mountedRef = useMountedRef();

  //페이지가 열린 직후와 날짜값이 변경된 경우 리덕스 액션함수 디스패치 --> ajax 호출
  React.useEffect(() => {
    dispatch(getTraffic({ targetDt: targetDt.replaceAll('-', '') }));
  }, [dispatch, targetDt]);

  //드롭다운의 선택이 변경된 경우의 이벤트
  const onDateChange = React.useCallback((e) => {
    e.preventDefault();
    //선택값으로 상태값을 갱신한다 --> React.useEffect()에 의해 액션함수가 디스패치 된다
    setTargetDt(e.target.value);
  }, []);

  //ajax 연동 결과에서 그래프에 표시 할 데이터만 추려내어 chartData 상태값에 반영한다
  //ajax는 컴포넌트가 화면에 마운트됨과 동시에 실행되므로, 이 처리는 컴포넌트가 화면에 마운트 된 이후에 수행되어야만 한다
  React.useEffect(() => {
    //컴포넌트가 화면에 마운트된 이후에만 동작하도록 한다
    if (mountedRef.current) {
      const newData = {
        movieNm: [],
        audiCnt: [],
      };

      data.boxOfficeResult.dailyBoxOfficeList.forEach((v, i) => {
        newData.movieNm.push(v.movieNm);
        newData.audiCnt.push(v.audiCnt);
      });
    }
  }, [mountedRef, data]);

  let accSum = 0;
  let dthSum = 0;
  let injSum = 0;

  return (
    <div>
      <Spinner visible={loading} />
      <select name="year" onChange={onDateChange}>
        <option value="">-- 년도 선택 --</option>
        <option value="2005">2005년도</option>
        <option value="2006">2006년도</option>
        <option value="2007">2007년도</option>
        <option value="2008">2008년도</option>
        <option value="2009">2009년도</option>
        <option value="2010">2010년도</option>
        <option value="2011">2011년도</option>
        <option value="2012">2012년도</option>
        <option value="2013">2013년도</option>
        <option value="2014">2014년도</option>
        <option value="2015">2015년도</option>
        <option value="2016">2016년도</option>
        <option value="2017">2017년도</option>
        <option value="2018">2018년도</option>
      </select>
      <hr />
      {error ? (
        <ErrorView error={error} />
      ) : (
        <div>
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
                  accSum += accident;
                  dthSum += death;
                  injSum += injury;
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
                <th>{accSum.toLocaleString()}건</th>
                <th>{dthSum.toLocaleString()}명</th>
                <th>{injSum.toLocaleString()}명</th>
              </tr>
            </tfoot>
          </Table>
        </div>
      )}
    </div>
  );
});

export default Traffic;
