import React, { memo } from 'react';
import styled from 'styled-components';
import { useQueryString } from '../hooks/useQueryString';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useMountedRef from '../hooks/useMountedRef';
import { getCovid } from '../slices/Covid19Slice';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import LineChartView from '../components/LineChartView';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  .flex-item {
    flex-basis: 100%;
    box-sizing: border-box;
    padding: 10px;
  }
`;

const Covid19 = memo(() => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.covid);
  const { api } = useParams();
  React.useEffect(() => {
    dispatch(getCovid({ api }));
  }, [dispatch, api]);

  const queryJson = useQueryString();
  const key1 = Object.keys(queryJson)[0];
  const val1 = parseInt(queryJson[key1]);
  const key2 = Object.keys(queryJson)[1];
  const val2 = parseInt(queryJson[key2]);
  const key = key1.replace(key1.slice(-4), '');
  const mountedRef = useMountedRef();
  const [chartData, setChartData] = React.useState();

  React.useEffect(() => {
    if (mountedRef.current) {
      let newCovid = [];
      newCovid = data.filter((v, i) => val1 - 2 < i && i < val2);

      const newData = {
        dateNm: [],
        pplCnt: [],
        name: key,
      };
      newCovid.forEach((v, i) => {
        newData.dateNm.push(v.date.slice(2, 10));
        newData.pplCnt.push(v[key]);
      });
      setChartData(newData);
      console.log(newData.dateNm);
      console.log(newData.pplCnt);
    }
  }, [mountedRef, data, key, val1, val2]);

  return (
    <div>
      <Spinner visible={loading} />

      {error ? (
        <ErrorView error={error} />
      ) : (
        <Container>
          <div className="flex-item">
            <LineChartView chartData={chartData} />
          </div>
          <div className="flex-item"></div>
        </Container>
      )}
    </div>
  );
});

export default Covid19;
