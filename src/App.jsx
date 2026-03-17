import { useEffect, useState } from "react";

const pokemonList = ["eevee", "pikachu", "piplup", "sprigatito", "snorlax"];

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
			<h1>Memory Card</h1>
			{cards.map((card) => {
				return <img src={card.sprite} alt="" key={card.id} />;
			})}
		</main>
	);
}

export default App;
