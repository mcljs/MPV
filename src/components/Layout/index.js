import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';
import Card from '../Ul/Card';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    <Card>
    <div className="tex-container">
    <p >Sitio WEB Desarrollado Por</p>
    <p>Oficina de Direccion Nacional de Estado - Regiones</p>
    <p>Movimiento Por La Paz Y la vida</p>
    </div>
    </Card>
      </React.Fragment>
    
   )

 }

export default Layout
