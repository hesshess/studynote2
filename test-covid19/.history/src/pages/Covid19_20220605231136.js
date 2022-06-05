import React, { memo } from 'react';

import MenuLink from '../components/MenuLink';

import { useQueryString } from '../hooks/useQueryString';
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getCovid } from '../slices/Covid19Slice';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import LineChartView from '../components/LineChartView';

const Covid19 = memo(() => {
  const queryJson = useQueryString();
  const input1 = queryJson['date1'];
  const input2 = queryJson['date2'];

  const date1 = queryJson['date1'] + 'T00:00:00Z';
  const date2 = queryJson['date2'] + 'T00:00:00Z';

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
      <nav>
        <MenuLink to={`/confirmed?date1=${input1}&date2${input2}`}>
          일일확진자
        </MenuLink>
        <MenuLink to={`/confirmed_acc?date1=${input1}&date2=${input2}`}>
          누적확진자
        </MenuLink>
        <MenuLink to={`/active?date1=${input1}&date2=${input2}`}>
          격리환자
        </MenuLink>
        <MenuLink to={`/released?date1=${input1}&date2=${input2}`}>
          격리해제
        </MenuLink>
        <MenuLink to={`/released_acc?date1=${input1}&date2=${input2}`}>
          누적격리해제
        </MenuLink>
        <MenuLink to={`/death?date1=${input1}&date2=${input2}`}>
          사망자
        </MenuLink>
        <MenuLink to={`/death_acc?date1=${input1}&date2=${input2}`}>
          누적사망자
        </MenuLink>
      </nav>

      {error ? (
        <ErrorView error={error} />
      ) : (
        chartData && <LineChartView chartData={chartData} />
      )}
    </div>
  );
});

export default Covid19;
