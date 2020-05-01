import React from 'react';
import './style.css'
import Card from '../../../components/Ul/Card';
import { NavLink } from 'react-router-dom';
/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
    <Card style={{marginBottom: '20px'}}>
    <div className="postimageWrapper">
    <img src={require("../../../blogNoticeimages/24abril.jpg")} alt=""/>
            </div>

    <div className="titlerecentepost" style={{textAlign:'center'}}>
        <h2>Venezuela confirma 7 nuevos casos por Covid-19 para un total de 318 contagiados</h2>
        <spa><NavLink to='/Noticias/venezuela-confirma-7-nuevos-casos-por-Covid-19'>14 de Abril 2020</NavLink></spa>
        <p>El Gobierno Nacional referencia página web de España 
          1km.geomatico.es para que los 
          venezolanos y venezolanas conozcan 
          su radio de acción durante flexibilización que acompaña etapa de control del Coronavirus (COVID-19) en el país.</p>
    </div>



    </Card>

    <Card style={{marginBottom: '20px'}}>
    <div className="postimageWrapper">
    <img src={require("../../../blogNoticeimages/25abril.jpg")}/>
            </div>

    <div className="titlerecentepost" style={{textAlign:'center'}}>
        <h2>Venezuela confirma 7 nuevos casos por Covid-19 para un total de 318 contagiados</h2>
        <spa>25 de Abril</spa>
        <p>El Gobierno Nacional referencia página web de España 
          1km.geomatico.es para que los 
          venezolanos y venezolanas conozcan 
          su radio de acción durante flexibilización que acompaña etapa de control del Coronavirus (COVID-19) en el país.</p>
    </div>



    </Card>
    
        </div>
   )

 }

export default RecentPosts