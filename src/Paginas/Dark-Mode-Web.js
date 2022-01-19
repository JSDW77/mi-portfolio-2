import Navbar from "../Componentes/Nav-bar";
import Hero from "../Componentes/Hero";
import Section from "../Componentes/Seccion";
import Skills from "../Componentes/Skills";
import Projects from "../Componentes/Proyects";
import Footer from "../Componentes/Footer";
import './Dark-Mode-Styles.css'

function DarkMode() {

  return (
    <div id='dm-all-conteiner'>
      <Navbar />
      <Hero/>
      <Section titulo='Habilidades'/>
      <Skills/>
      <Section titulo='Proyectos'/>
      <Projects/>
      <Section titulo='Contacto'/>
      <Footer/>
    </div>
  );
}

export default DarkMode;
