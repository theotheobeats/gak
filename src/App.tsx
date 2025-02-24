import Hero from "./pages/Hero";
import "./App.css";
import About from "./pages/About";
import Schedule from "./pages/Schedule";

function App() {
	return (
		<div className="flex flex-col">
			<Hero />
			<About />
			<Schedule />
		</div>
	);
}

export default App;
