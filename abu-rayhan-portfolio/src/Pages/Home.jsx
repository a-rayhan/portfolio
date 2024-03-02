import About from "../Components/About";
import Contact from "../Components/Contact";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

const Home = () => {
    return (
        <div>
            <Hero />
            <Skills />
            <About />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;