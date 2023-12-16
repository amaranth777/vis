import React from "react";

interface tesProps {
	name: string;
	PokemonId: number;
}


const Test: React.FC<tesProps> = (PokemonId) => {
	let str: string = "./media/" + PokemonId.PokemonId + ".png"
	return <img src={str} alt={"png"}/>;
};

export default Test;