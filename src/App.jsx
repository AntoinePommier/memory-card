import { useEffect, useState } from "react";
import Grid from "./Components/Grid";
import "./App.css";

const pokemonList = [
	"eevee",
	"pikachu",
	"piplup",
	"chikorita",
	"snorlax",
	"psyduck",
	"torchic",
	"charmander",
	"jigglypuff",
	"pichu",
	"squirtle",
	"mew",
	"bulbasaur",
	"teddiursa",
	"riolu",
	"cyndaquil",
];

function App() {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		async function fetchPokemon() {
			try {
				const results = await Promise.all(
					pokemonList.map(async (pokemon) => {
						const res = await fetch(
							`https://pokeapi.co/api/v2/pokemon/${pokemon}`,
						);
						if (!res.ok) {
							throw new Error(`Error ${res.status}`);
						}
						const data = await res.json();
						return {
							name: data.name,
							id: data.id,
							sprite: data.sprites.front_default,
							animation:
								data.sprites.versions["generation-v"]["black-white"].animated
									.front_default,
						};
					}),
				);
				console.log(results);
				setCards(results);
			} catch (error) {
				console.error(error);
			}
		}
		fetchPokemon();
	}, []);

	return (
		<main>
			<Grid cards={cards} />
		</main>
	);
}

export default App;
