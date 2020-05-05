import React from 'react';
import './style.css'
import Card from '../../../components/Ul/Card';
import { NavLink } from 'react-router-dom';
import Tweet from './tweet';
import { TwitterTweetEmbed } from 'react-twitter-embed';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    
    <div style={props.style}>
    
   <Tweet style={{ padding:'20px',display: 'flex'}}/> 
   <h2>
     
   </h2>

    <Card style={{marginBottom: '20px',display: "flex",
    position: "relative"}}>
  
  <div className="titlerecentepost" style={{textAlign:'center'}}>
        <h2><NavLink to='/Noticias/venezuela-reporta-10-nuevos-contagios-por-covid-19'
        style={{textDecoration:'none', color: '#e41e25', textAlign: 'center',fontSize: '30px'}}>Venezuela Reporta 10 Nuevos Contagios Por COVID-19</NavLink></h2>
        
        <div className="postimageWrapper">
    <img src={require("../../../blogNoticeimages/2mayo.jpg")} alt=""/>
            </div>
        <time>2 mayo 2020</time>
        <p>A 345 asciende el total de contagios por
           COVID-19 en Venezuela, luego de que se 
           confirmaran 10 nuevos casos en las últimas
            24 horas. El balance lo ofreció el 
            vicepresidente de Comunicación, 
            Cultura y Turismo, Jorge Rodríguez</p>
    </div>



    </Card>

    <Card style={{marginBottom: '20px',display: "flex",
    position: "relative"}}>
  
  <div className="titlerecentepost" style={{textAlign:'center'}}>
        <h2><NavLink to='/Noticias/venezuela-registra-dos-nuevos-casos-de-covid-19-en-ultimas-24-horas'
        style={{textDecoration:'none', color: '#e41e25', textAlign: 'center',fontSize: '30px'}}
        >Gobierno Referencia Página Web A Los Venezolanos En Etapa De Flexibilización En El Control Del COVID-19
        </NavLink></h2>
        
        <div className="postimageWrapper">
    <img src={require("../../../blogNoticeimages/25abril.jpg")} alt=""/>
            </div>
        <time>25 Abril 2020</time>
        <p>El Gobierno Nacional referencia página web de España 
          1km.geomatico.es para que los venezolanos 
          y venezolanas conozcan su radio de acción 
          durante flexibilización que acompaña etapa de control del 
          Coronavirus (COVID-19) en el país.</p>
    </div>



    </Card>
    
        </div>
   )

 }

export default RecentPosts