import '../Estilos/Dark/Hero.css'


function Hero() {
  return (
      <section id='hero-cont'>
          <div id='hero-left-cont'>
              <div id='hero-title'>
                <p>Hola mi nombre es <span>Julian Sosa</span><br/>
                y te doy la bienvenida a mi pagina web.</p>
              </div>
              <div id="line"></div>
              <div id='hero-p'>
                  <p>Tengo 29 años y soy desarrollador web front end y diseñador ui/ux.<br/>
                  En las siguientes secciones podras encontrar algunos de mis trabajos, tambien conocer mis<br/>
                  habilidades y herramientas de trabajo.<br/>
                  Espero poder ayudarte a hacer realidad tus proyectos.</p>
              </div>
              <button id='hero-btn'>
                  <a href='#dm-footer-cont'>Contactame</a>
              </button>
          </div>
          <div id='hero-right-cont'>
              </div>          
      </section>
  );
}

export default Hero;
