import '../Estilos/Dark/Footer.css'
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <div id='dm-footer-cont'>
      <div id='f-cont'>
      <div id='info-cont'>
          <div id='cont-left'>
          <p>Para contratar mis servicios o cualquier consulta, solo via mail.</p>
            <div>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=julianrazielsosa@gmail.com' target={'_blank'} rel='noreferrer'><Icon id='mail-ico' icon='ant-design:mail-outlined' inline={true} /></a>
           <p>juliansosa.dw@gmail.com</p>
            </div>
          </div>
          <div id='cont-right'>
              <div>
              <p>Si te interesa podes seguirme<br/>
              en las siguientes plataformas.<br/>
              </p>
              <a href='https://twitter.com/JulianDW77' target={'_blank'} rel='noreferrer'><Icon className='sm-icons' icon='et:twitter' inline={true} /></a>
              <a href='https://github.com/JSDW77' target={'_blank'} rel='noreferrer'><Icon className='sm-icons'  icon='akar-icons:github-outline-fill' inline={true} /></a>
              <a href='https://www.instagram.com/julisosa.77/' target={'_blank'} rel='noreferrer'><Icon className='sm-icons' icon='akar-icons:instagram-fill' inline={true} /></a>
              </div>
          </div>
      </div>
      <div id='info-line'></div>
      <div id='copy'>
          <h5>Copyright © 2022 | JSDW</h5>
      </div>
      </div>
    </div>
  );
}

export default Footer;
