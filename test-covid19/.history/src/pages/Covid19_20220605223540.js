import React, { memo } from 'react';
import styled from 'styled-components';
import MenuLink from '../components/MenuLink';

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

const Covid19 = memo(({ pdate1, pdate2 }) => {
  const queryJson = useQueryString();
  const date1 = queryJson['date1'] + 'T00:00:00Z';
  const date2 = queryJson['date2'] + 'T00:00:00Z';

  // let dateplus = new Date(queryJson['date2']);
  // dateplus.setDate(dateplus.getDate() + 1);
  // console.log(dateplus.toString());
  // const year = dateplus.getFullYear();
  // const month = dateplus.getMonth() + 1;
  // const date = dateplus.getDate();
  // const format =
  //   year +
  //   '-' +
  //   ('00' + month.toString()).slice(-2) +
  //   '-' +
  //   ('00' + date.toString()).slice(-2);
  // console.log(format);
  // const date2 = format + 'T00:00:00Z';
  // console.log(date2);

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
      {
        <nav>
          <MenuLink to={`/confirmed?date1=${pdate1}&date2${pdate2}`}>
            일일확진자
          </MenuLink>
          <MenuLink to={`/confirmed_acc?date1=${pdate1}&date2=${pdate2}`}>
            누적확진자
          </MenuLink>
          <MenuLink to={`/active?date1=${pdate1}&date2=${pdate2}`}>
            격리환자
          </MenuLink>
          <MenuLink to={`/released?date1=${pdate1}&date2=${pdate2}`}>
            격리해제
          </MenuLink>
          <MenuLink to={`/released_acc?date1=${pdate1}&date2=${pdate2}`}>
            누적격리해제
          </MenuLink>
          <MenuLink to={`/death?date1=${pdate1}&date2=${pdate2}`}>
            사망자
          </MenuLink>
          <MenuLink to={`/death_acc?date1=${pdate1}&date2=${pdate2}`}>
            누적사망자
          </MenuLink>
        </nav>
      }

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
