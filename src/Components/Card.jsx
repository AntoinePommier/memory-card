import "./Card.css";
import { useState } from "react";

function Card({ name, sprite, animation, isDark }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<button
			type="button"
			className={`card-container ${isDark ? "dark" : "light"}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img src={isHovered ? animation : sprite} alt={name} />
		</button>
	);
}

export default Card;
