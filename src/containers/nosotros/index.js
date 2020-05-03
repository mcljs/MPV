import React from 'react'
import './style.css';

import Card from '../../components/Ul/Card';

/**
* @author
* @function nosotros
**/

const nosotros = (props) => {
    return(
      <div style={props.style}>
 <Card style={{marginBottom: '20px', padding:'20px',boxSizing:'border-box'}}>
      <div className="postimageWrapper">
      <img src="http://4.bp.blogspot.com/-C9uQfZcq7Ac/UvLHFjJprsI/AAAAAAAABKo/kPUqRQu9ds0/s1600/pazy_vida_logo.png"/>
              </div>
      <div className="fundationletra" style={{textAlign:'center'}}>
          <h2>Fundacion Movimiento Por La Paz Y La Vida</h2>
          <spa><strong>Ministerio del Poder Popular del Despacho de la Presidencia y Seguimiento de la Gestion de Gobierno<strong/></strong></spa>    
          <h3>Mision</h3>
          <p>La Fundación Movimiento por la Paz y la Vida tiene como propósito apoyar e impulsar una cultura a favor de la convivencia pacífica y solidaria, mediante la articulación con los Órganos, Entes, Misiones, Comunidades Organizadas y Voluntariado, y el financiamiento, la evaluación y el control administrativo de proyectos, fortaleciendo los valores y principios Revolucionarios, Bolivarianos y Cristianos para crear territorios libre de violencia, a través del desarrollo de actividades deportivas, culturales, educativas, sociales, religiosas, productivas e iniciativas populares que contribuyan a alcanzar los objetivos trazados por la Revolución Bolivariana de lograr en Venezuela en Territorio de Paz.</p>
          <h3>Vision</h3>
          <p>Convertirnos en la institución Revolucionaria y Socialista, de referencia mundial, modelo en la implementación eficiente y con calidad de talento humano, metodología, recursos tecnológicos, pedagógicos, culturales, religiosos, deportivos, recreativos, ecológicos, de salud mental y física, para la constitución de espacios autóctinos de paz, aplicando métodos basados en los valores Cristianos, Bolivarianos y Socialistas; que garanticen la organización la productividad, la sana pacífica y solidaria convivencia, que conlleve a la paz y el vivir bien en todo el territorio nacional, y así lograr la declaracón de Venezuela como Territorio de Paz.
</p>
      </div>
  
  
  
      </Card>
      
          </div>
     )
  
   }
  

export default nosotros