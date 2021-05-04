import { ChartBar } from '../../components';
import './Chart.css';

export const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxTotal = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxTotal}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
