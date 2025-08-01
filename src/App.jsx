import NavBar from "./components/layout/NavBar";
import Hero from "./sections/Hero";
import AboutMe from "./components/layout/AboutMe";
function App() {
  return (
    <div className="bg-[#0F0F0F] text-[#F1F1F1]">
      <NavBar />
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
