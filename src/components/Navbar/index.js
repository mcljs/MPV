/**Barra de Navegacion */

import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

  const[search,setSearch]= useState(false);

  const submitSearch=(e)=>{
    e.preventDefault();
    alert('Searhed');
  }

  const openSearch=()=>{
    setSearch(true);
  }

  const searchClass= search?'searchinput active': 'searchinput';

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/nosotros">Nosotros</NavLink></li>
           
            <li><NavLink to="/Estadisticas">Estadisticas</NavLink></li>
        </ul>
        
        <div className={"search"}>
          <form className={submitSearch}>
          <input type="text" className={searchClass} placeholder="Buscar ..."/>
            <img onClick={openSearch} className="searchicon" src={require("../../assets/icons/search.png")} alt="search"/>  
          </form>
        </div>
        </div>
   )

 }

export default Navbar