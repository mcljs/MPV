import React from 'react'
import Card from '../../components/Ul/Card';
import Chartone from './graphi';
import './style.css'
import Chartdos from './chart-two';
import ChartThree from './chart-three';
import ChartFour from './chart-four';
import Layout from '../../components/Layout';
/**
* @author
* @function Estadisticas
**/

const Estadisticas = (props) => {
  return(
    
    
<Card style={{marginBottom: '20px', padding:'20px',boxSizing:'border-box',}}>

<div className="titulo-primera-grafica" > 
<h1>Estadisticas Del Movimiento Por La Paz Y La Vida</h1>
    </div>
    <div className="separation">
    <div className="statwidget-estadisticas">
    <header><p>Total de Beneficiarios Atendidas Abril</p>
    <section className="statbody">64.879</section></header>
</div>



    <div class="statwidget-estadisticas">
    <header><p>Actividades Realizadas Abril</p>
    <section class="statbody">941</section></header>
</div>

</div>

<div className="grafica">
<p>Poblacion Atendida por Grupo Etario Abril</p>
<Chartone/>
</div>

<div className="grafica">
<p>Actividades Realizadas Abril</p>
<Chartdos/>
</div>

<div className="grafica">
<p>Beneficiarios Atendido 2020</p>
<ChartThree/>

</div>

<div className="grafica">
<p>Distribución Atendido Indirectos e Indirectos 2020</p>
<ChartFour/>
</div>

    </Card>
   )
 }

export default Estadisticas