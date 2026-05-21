import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Work from "./Work.jsx";
import Experience from "./Experience.jsx";
import Stack from "./Stack.jsx";
import Contact from "./Contact.jsx";

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Experience />
        <Stack />
        <Contact />
      </main>
    </>
  );
};

export default App;
