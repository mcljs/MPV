import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';
/**
 * @author
 * @function Header
 */

/**Encabezado */
 const Header = (props) =>{
     return(
         <header className="header">
             <nav className="headerMenu">
                 <div>
        <img src={require("../Img/icon-pyv.png")} className="icon-header"/>       
        <a><NavLink to="/">Inicio</NavLink></a>  
        <a><NavLink to="/nosotros">Nosotros</NavLink></a>
        <a><NavLink to="/Estadisticas">Estadisticas</NavLink></a>
        </div>
             </nav>
             <div className="etiqueta">
                 <p>Viceministerio Asuntos Para la Paz</p>
                 <p>Direccion Nacional De Estado</p>
             </div>
         </header>
     )
 }

 export default Header
