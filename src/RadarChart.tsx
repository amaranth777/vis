import React, {useEffect, useRef} from 'react';
import {Radar} from '@antv/g2plot';

interface RadarChartProps {
	data: { label: string; value: number }[];
}


const RadarChart: React.FC<RadarChartProps> = ({data}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	// data[1].value=150;
	useEffect(() => {
		if (data && containerRef.current) {
			// eslint-disable-next-line react-hooks/exhaustive-deps
			const radarPlot = new Radar(containerRef.current, {
				data,
				xField: 'label',
				yField: 'value',
				color:'#2cc4de',
				meta: {
					value: {
						alias: 'value',
						min: 0,
						max: 160,//TODO: 是否需要动态调整
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
				area: {

					style:{
						opacity:0.5,
						fill:'#6beae6',

					}
				},
				point: {
					size: 2,

				},
				lineStyle:{
					fontSize:2,
					opacity:0.8,
					lineJoin:'round',
					lineCap:'round',
				},

				tooltip:{
					shared:true,
					offset: 20,
				}
			});
			radarPlot.render();
		}
	}, [data]);

	return <div ref={containerRef} style={{width: '500px', height: '500px'}}/>;
};

export default RadarChart;
