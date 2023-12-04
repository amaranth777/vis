import React from "react";
import {Tabs} from "antd";

import {Radar} from '@antv/g2plot';


const App: React.FC = () => {
		return (
			<div>
				<Tabs
					defaultActiveKey="1"
					tabPosition={"left"}
					style={{height: 800}}
					items={new Array(800).fill(null).map((_, i) => {
						const ID = String(i);
						return {
							// eslint-disable-next-line jsx-a11y/img-redundant-alt
							icon: <img src="./media/Abomasno.png" alt={`Image of tab ${ID}`}/>,
							label: `Tab-${ID}`,
							key: ID,
							disabled: i === 28,
							children: <div>
								{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
								{i === 1 &&
                                    <div id="max">
                                        <div id="right">
                                            1
                                        </div>
                                        <div id="top">
                                            <div id="mid">
                                                TYPE
                                            </div>
                                        </div>
                                        <div id="middle">
                                            <div id="left1">
												{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                                <img src="./media/Abomasno.png" alt={`Image of tab ${ID}`}/>
                                            </div>
                                            <div id="right1">
												{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <li><a>1</a></li>
												{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <li><a>1</a></li>
												{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <li><a>1</a></li>
												{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <li><a>1</a></li>
                                            </div>
                                        </div>
                                    </div>}
								{i === 2 && <div id="G2container"></div>}
							</div>
						};
					})}
				/>
			</div>
		)
			;
	}
;

fetch("src/abc.json")
	.then((data) => data.json())
	.then((data) => {
		const radarPlot = new Radar('G2container', {
			data,
			xField: 'Combat Power',
			yField: 'score',
			meta: {
				score: {
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
			// 开启面积
			area: {},
			// 开启辅助点
			point: {
				size: 2,
			},
		});
		radarPlot.render();
	});
export default App;