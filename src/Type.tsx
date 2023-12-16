import React from "react";
import getIntroduction from "./getIntroduction";

interface TypeProps {
	PokemonId: number;
}


const Type: React.FC<TypeProps> = (TypeProps) => {
	let temp: any;
	temp = getIntroduction({PokemonId:TypeProps.PokemonId , name: " "});
	return(
	<div>
		{temp.name};
	</div>
	)
};

export default Type;