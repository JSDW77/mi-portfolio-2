import '../Estilos/Dark/Nav-Bar.css'
import sun from '../Imagenes/sun.svg'
import moon from '../Imagenes/moon.svg'
import eng from '../Imagenes/eu-flag.svg'
import esp from '../Imagenes/esp-flag.svg'
import menu from '../Imagenes/menu.svg'
import menuX from '../Imagenes/close-menu-icon.svg'
import { useState } from 'react'

function Navbar(props) {
  const [menuOn,setMenuOn]=useState(false)
  const closeMenu =()=>{setMenuOn(false)}
  return (
   <>
    {menuOn?<div id='hiden-menu-cont'>
        <img src={menuX} alt='close-menu' id='menu-x' onClick={()=>{setMenuOn(false)}} ></img>
        <div>
      <a href='#hero-cont' onClick={()=>{closeMenu()}}>Inicio</a>
      <a href='#dm-skills-cont' onClick={()=>{closeMenu()}}>Habilidades</a>
      <a href='#dm-project-cont' onClick={()=>{closeMenu()}}> Proyectos</a>
      <a href='#dm-footer-cont' onClick={()=>{closeMenu()}}>Contacto</a>
      </div>
    </div>:''}
    <nav id="nav-cont">
  <div id="logo-cont"><p>JSDW</p></div>
  <div id="nav-ul-cont">
  <ul>
    <li><a href="#hero-cont">Inicio</a></li>
    <li><a href="#dm-skills-cont">Habiliddes</a></li>
    <li><a href="#dm-project-cont">Proyectos</a></li>
  </ul>
  </div>
  <div id='dm-lm-icons'>
    <img src={sun} alt='light mode sun icon'></img>
    <img src={eng} alt='english lenguage'></img>
  </div>
  <div id='menu-cont'>
    <img src={menu} alt='menu icon' id='menu-icon' onClick={()=>{setMenuOn(true)}}></img>
  </div>
</nav>
   </>
  );
}

export default Navbar;
