import React from 'react';
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';
import 'react-vis/dist/style.css'; 
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import '../style.css';

const CalendarHeatmapComponent = () => {
  const today = new Date();
  const values = [
    { date: '2023-01-01', count: 1 },
    { date: '2023-01-02', count: 4 },
    { date: '2023-01-03', count: 2 },
   
  ];

  const data = [
    { x: 1, y: 10 },
    { x: 2, y: 15 },
    { x: 3, y: 8 },
    { x: 4, y: 5 },
    { x: 5, y: 12 },
    { x: 6, y: 16 },
    { x: 7, y: 9 },
    { x: 8, y: 10 },
    { x: 9, y: 15 },
    { x: 10, y: 8 },
    { x: 11, y: 5 },
    { x: 12, y: 12 },
    { x: 13, y: 16 },
    { x: 14, y: 9 },
  ];

  const filteredData = data.filter(point => {
    const date = new Date(`2023-01-${point.x}`);
    return date.getMonth() === 0; 
  });

  return (
    <div className="calendar-heatmap">
      <CalendarHeatmap
        startDate={new Date(today.getFullYear(), 0, 1)}
        endDate={new Date(today.getFullYear(), 11, 31)}
        values={values}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
        tooltipDataAttrs={(value) => {
          return {
            'data-tip': value.date
              ? `${value.date}: ${value.count} activities`
              : 'No activities',
          };
        }}
        showWeekdayLabels
        onClick={(value) => alert(`Clicked on value with count: ${value.count}`)}
      />

      <XYPlot height={200} width={400}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickFormat={v => Math.floor(v)} />
        <YAxis tickFormat={v => Math.floor(v)} />
        <LineSeries data={filteredData} curve={'curveMonotoneX'} />
      </XYPlot>
    </div>
  );
};

export default CalendarHeatmapComponent;
