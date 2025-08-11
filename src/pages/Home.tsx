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
            <div id="about">
                <About />
            </div>
            <div id="schedule">
                <Schedule />
            </div>
            <div id="devotion">
                <DevotionPage />
            </div>
            <div id="documentation">
                <Gallery />
            </div>
            <div id="cta">
                <Cta />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
