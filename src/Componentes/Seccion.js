import '../Estilos/Dark/Section.css'

function Section(props) {
  return (
    <div id='dm-section-cont'>
      <div id='sect-line'></div>
      <div id='sect-title'>{props.titulo}</div>
    </div>
  );
}

export default Section;
