import Card from "./Card";
import "./Grid.css";

function Grid({ cards }) {
	return (
		<div className="grid-container">
			{cards.map((card, index) => {
				const row = Math.floor(index / 4);
				const col = index % 4;

				const isDark = (row + col) % 2 === 0;

				return (
					<Card
						name={card.name}
						key={card.id}
						sprite={card.sprite}
						animation={card.animation}
						isDark={isDark}
					/>
				);
			})}
		</div>
	);
}

export default Grid;
