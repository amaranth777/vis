import React from "react";
import {ConfigProvider, Tabs} from "antd";
import Radar from "./Radar";
import Test from "./Test";
import getIntroduction from "./getIntroduction";


const App: React.FC = () => {
		return (
			<ConfigProvider
				theme={{components: {}}}>
				<Tabs
					defaultActiveKey="0"
					tabPosition={"left"}
					style={{height: 800}}
					type={"card"}
					size={"small"}

					items={new Array(800).fill(null).map((_, i) => {
						// @ts-ignore
						const ID = String(i);
						let temp: any;
						temp = getIntroduction({PokemonId: i, name: " "});
						return {
							// eslint-disable-next-line jsx-a11y/img-redundant-alt
							icon: <img src="./src/ball.png" alt={" "}/>,
							label: temp[0],
							key: ID,
							children: <div>
								{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
								{
									<div id="max">
										<div id="container2"></div>
										<div id="right">
											<Radar PokemonId={i} name={" "}/>
										</div>
										<div id="top">
											<div id="mid">
												{temp[0]}
											</div>
										</div>
										<div id="middle">
											<div id="left1">
												{/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
												<Test PokemonId={i} name="asdf"/>
											</div>
											<div id="right1">
												{temp[1]}
											</div>
										</div>
									</div>}
							</div>
						};
					})}
				/>
			</ConfigProvider>
		)
			;
	}
;
export default App;