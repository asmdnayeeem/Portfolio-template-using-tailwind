import NavBar from "./components/Navbar";
import Home from  "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
function App() {
  return (
    <div>
    <section className="">

      <NavBar />
      <Home/>
      <Skills/>
      <About/>
      <Contact/>
      </section>
    </div>
  );
}

export default App;
