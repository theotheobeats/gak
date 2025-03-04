import About from "../components/About";
import Cta from "../components/Cta";
import DevotionPage from "../components/Devotion";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Schedule from "../components/Schedule";

const Home = () => {
	return (
		<div className="min-h-screen">
			<Hero />
			<About />
			<Schedule />
			<DevotionPage />
			<Gallery />
			<Cta />
			<Footer />
		</div>
	);
};

export default Home;
