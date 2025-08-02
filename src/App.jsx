import NavBar from "./components/layout/NavBar";
import Hero from "./sections/Hero";
import AboutMe from "./components/layout/AboutMe";
import Projects from "./components/layout/Projects";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <div className="bg-[#0F0F0F] text-[#F1F1F1] flex flex-col gap-4">
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
