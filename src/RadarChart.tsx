import React, { useEffect, useRef } from 'react';
import { Radar } from '@antv/g2plot';

interface RadarChartProps {
  data: { label: string; value: number }[];
}

const RadarChart: React.FC<RadarChartProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data && containerRef.current) {
      const radarPlot = new Radar(containerRef.current, {
        data,
        xField: 'label',
        yField: 'value',
        meta: {
          value: {
            alias: '分数',
            min: 0,
            max: 260,
          },
        },
        xAxis: {
          line: null,
          tickLine: null,
          grid: {
            line: {
              style: {
                lineDash: null,
              },
            },
          },
        },
        yAxis: {
          line: null,
          tickLine: null,
          grid: {
            line: {
              type: 'line',
              style: {
                lineDash: null,
              },
            },
            alternateColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
        area: {},
        point: {
          size: 2,
        },
      });
      radarPlot.render();
    }
  }, [data]);

  return <div ref={containerRef} style={{ border: 'none', width: '300px', height: '300px' }} />;
};

export default RadarChart;
