import Hero from "./pages/Hero";
import "./App.css";
import About from "./pages/About";
import Schedule from "./pages/Schedule";
import Devotion from "./pages/Devotion";
import Cta from "./pages/Cta";
import Footer from "./pages/Footer";

function App() {
	return (
		<div className="flex flex-col">
			<Hero />
			<About />
			<Schedule />
			<Devotion />
			<Cta />
			<Footer />
		</div>
	);
}

export default App;
