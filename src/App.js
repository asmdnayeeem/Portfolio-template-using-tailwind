import NavBar from "./components/Navbar";
import About from  "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
function App() {
  return (
    <div>
    <section className="">

      <NavBar />
      <About/>
      <Skills/>
      <Contact/>
      </section>
    </div>
  );
}

export default App;
