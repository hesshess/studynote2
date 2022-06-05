import React, { memo } from 'react';
import styled from 'styled-components';

import { useQueryString } from '../hooks/useQueryString';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
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
  const queryJson = useQueryString();
  const date1 = queryJson['date1'] + 'T00:00:00Z';
  const date2 = queryJson['date2'] + 'T00:00:00Z';

  let dateplus = new Date(queryJson['date2']);
  dateplus.setDate(dateplus.getDate() + 1);
  console.log(dateplus.toString());
  const year = dateplus.getFullYear();
  const month = dateplus.getMonth() + 1;
  const date = dateplus.getDate();
  const format =
    year +
    '-' +
    ('00' + month.toString()).slice(-2) +
    '-' +
    ('00' + day.toString()).slice(-2);
  console.log(format);

  const { field } = useParams();

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.covid);
  React.useEffect(() => {
    dispatch(getCovid({ date_gte: date1, date_lte: date2 }));
  }, [dispatch, date1, date2]);

  const [chartData, setChartData] = React.useState();

  React.useEffect(() => {
    const newData = {
      dateNm: [],
      pplCnt: [],
      name: field,
    };
    data &&
      data.forEach((v, i) => {
        newData.dateNm.push(v.date.slice(2, 10));
        newData.pplCnt.push(v[field]);
      });
    setChartData(newData);
  }, [data, field, date1, date2]);

  return (
    <div>
      <Spinner visible={loading} />

      {error ? (
        <ErrorView error={error} />
      ) : (
        chartData && (
          <Container>
            <div className="flex-item">
              <LineChartView chartData={chartData} />
            </div>
            <div className="flex-item"></div>
          </Container>
        )
      )}
    </div>
  );
});

export default Covid19;
