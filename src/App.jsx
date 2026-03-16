import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<main>
			<h1>Memory Card</h1>

			<button type="button" onClick={() => setCount((c) => c + 1)}>
				Count: {count}
			</button>
		</main>
	);
}

export default App;
