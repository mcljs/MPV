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
    <div className="tex-container">
    <Card>
    <p >Sitio WEB Desarrollado Por</p>
    <p>Oficina de Direccion de Estado</p>
    <p>Movimiento Por La Paz Y la vida</p>
    </Card>
    </div>
      </React.Fragment>
    
   )

 }

export default Layout
