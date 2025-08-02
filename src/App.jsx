import NavBar from "./components/layout/NavBar";
import Hero from "./sections/Hero";
import AboutMe from "./components/layout/AboutMe";
import Projects from "./components/layout/Projects";
function App() {
  return (
    <div className="bg-[#0F0F0F] text-[#F1F1F1]">
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
