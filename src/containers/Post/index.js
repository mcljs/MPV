import React from 'react'
import Card from '../../components/Ul/Card';
import {Bar,Line,Pie} from 'react-chartjs-2'
/**
* @author
* @function Estadisticas
**/

const Estadisticas = (props) => {
  return(
    
    <div style={props.style}>
<Card style={{marginBottom: '20px', padding:'20px',boxSizing:'border-box'}}>
<h1>Estadisticas Del Movimiento Por La Paz Y La Vida</h1>

<header><p>Total de Beneficiarios Atendidas</p>
    <section className="statbody">122.308</section></header>

    <header><p>Actividades Realizadas</p>
    <section className="statbody">10.946</section></header>
    <div style={{textAlign:'center'}}>
    </div>


    <div className="titulo-primera-grafica">
    <h1>Poblacion Atendida por Grupo Hetario Marzo</h1>
</div>

<div className="grafica1"></div>

  
    </Card>

        </div>
   )
 }

export default Estadisticas