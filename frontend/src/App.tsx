import "./App.css";
import ThreeD from "./components/3D";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Hero />
      <About/>
      <Skills/>
      <ThreeD/>
      <Projects/>
    </>
  );
}

export default App;
