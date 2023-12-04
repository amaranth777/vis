import React from 'react';
import RadarChart from './RadarChart';

const Chart: React.FC = () => {
	const data = [
		{label: 'A', value: 10},
		{label: 'B', value: 60},
		{label: 'C', value: 40},
		{label: 'D', value: 70},
		{label: 'E', value: 90},
		{label: 'F', value: 120},
	];

	return (
		<div>
			<RadarChart data={data}/>
		</div>
	);
};

export default Chart;
