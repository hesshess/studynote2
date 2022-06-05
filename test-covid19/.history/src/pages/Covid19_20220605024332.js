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
  const { field } = useParams();
  React.useEffect(() => {
    dispatch(getCovid());
  }, [dispatch]);

  const queryJson = useQueryString();

  const dateId1 = parseInt(queryJson['date_gte']);

  const dateId2 = parseInt(queryJson['date_lte']);

  const mountedRef = useMountedRef();
  const [chartData, setChartData] = React.useState();

  React.useEffect(() => {
    if (mountedRef.current) {
      let newCovid = [];
      newCovid = data.filter((v, i) => dateId1 - 2 < i && i < dateId2);

      const newData = {
        dateNm: [],
        pplCnt: [],
        name: field,
      };
      newCovid.forEach((v, i) => {
        newData.dateNm.push(v.date.slice(2, 10));
        newData.pplCnt.push(v[field]);
      });
      setChartData(newData);
      console.log(newData.dateNm);
      console.log(newData.pplCnt);
    }
  }, [mountedRef, data, field, dateId1, dateId2]);

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
