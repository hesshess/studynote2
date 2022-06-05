import React, { memo } from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';

import useMountedRef from '../hooks/useMountedRef';

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

const Covid19 = memo((props) => {
  const { field } = useParams();

  const { data } = props;

  const mountedRef = useMountedRef();
  const [chartData, setChartData] = React.useState();

  React.useEffect(() => {
    if (mountedRef.current) {
      const newData = {
        dateNm: [],
        pplCnt: [],
        name: field,
      };
      data.forEach((v, i) => {
        newData.dateNm.push(v.date.slice(2, 10));
        newData.pplCnt.push(v.field);
      });
      setChartData(newData);
      console.log(newData.dateNm);
      console.log(newData.pplCnt);
    }
  }, [mountedRef, data, field]);

  return (
    <div>
      <Container>
        <div className="flex-item">
          <LineChartView chartData={chartData} />
        </div>
        <div className="flex-item"></div>
      </Container>
    </div>
  );
});

export default Covid19;
