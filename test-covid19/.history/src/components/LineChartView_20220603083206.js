import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChartView = memo(({ chartData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `날짜별 ${chartData.name}`,
      },
    },
  };
  const labels = chartData.dateNm;

  const data = {
    labels,
    datasets: [
      {
        label: chartData.name,
        data: chartData.pplCnt,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Line options={options} data={data} />;
});

LineChartView.defaultProps = {
  chartData: {
    dateNm: [],
    pplCnt: [],
  },
};

export default LineChartView;
