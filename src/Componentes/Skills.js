import '../Estilos/Dark/Skills.css'

function Skills(props) {
  return (
    <div id='dm-skills-cont'>
        <div id='skill-description'>
            <h2>Mi ruta como desarrollador</h2>
            <p>En cuanto a la programacion, primeramente<br/>
            decidi seguir la ruta de un desarrollador front-end,<br/>
            inclinandome mas a la parte visual,utilizando las<br/>
            herramientas mas conocidas en el dia de hoy.</p>
            <br/>
            <br/>
            <p>Del lado back-end del desarrollo, solo tengo <br/>
            conocimientos basicos de NodeJs y express para el<br/>
            lado del servidor y MongoDb para base de datos.
            </p>
            <div id='skills-line'></div>
            <h2>Habilidades de diseño</h2>
            <p>En cuanto al disenio, hace mucho tiempo manejo<br/>
             photoshop para edicion de fotos o imagenes.<br/>
             Pero aparte de esta herramienta tambien añadi<br/>
             figma para la maquetacion de las paginas webs.</p>
        </div>
        <div id='skill-logos'>
            <div id='dev-logos'></div>
            <div id='dis-logos'></div>
    
        </div>
    </div>
  );
}

export default Skills;
