import React from "react";
import {Tabs} from "antd";
import Radar from "./Radar";


const App: React.FC = () => {
		return (
			<Tabs
				defaultActiveKey="0"
				tabPosition={"left"}
				style={{height: 800}}
				type={"card"}
				size={"small"}
				items={new Array(800).fill(null).map((_, i) => {
					const ID = String(i);
					return {
						// eslint-disable-next-line jsx-a11y/img-redundant-alt
						icon: <img src="./media/Abomasno.png" alt={`Image of tab ${ID}`}/>,
						label: `Tab-${ID}`,
						key: ID,
						children: <div>
							{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
							{
								<div id="max">
									<div id="container2"></div>
									<div id="right">
										<Radar PokemonId={i}/>
									</div>
									<div id="top">
										<div id="mid">
											TYPE
										</div>
									</div>
									<div id="middle">
										<div id="left1">
											{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
											<img src="./media/${ID}.png" alt={`Image of tab ${ID}`}/>
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
						</div>
					};
				})}
			/>
		)
			;
	}
;
export default App;